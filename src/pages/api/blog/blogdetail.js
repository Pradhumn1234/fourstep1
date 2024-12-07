import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db';
import BlogDetail from '@/models/admin/blog copy/BlogDetail';
import BlogSeoDetail from '@/models/admin/blog copy/BlogSeoDetail';
import BlogQuestion from '@/models/admin/blog copy/BlogQuestion';
import SubQuestions from '@/models/admin/blog copy/SubQuestions'
const uploadDirectory = './public/uploads/blogdetail';
const uploadDirectory1 = './public/uploads/images';
// Ensure upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const apiRoute = async (req, res) => {
  await dbConnect();

  if (req.method === 'POST') {
    upload.single('file')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { title,subTitle, description, contentsummary,time, selectTopic,selectDepartment,selectIndustry,selectTools } = req.body;
      const fileData = req.file && {
        title,
        time,
        subTitle,
        contentsummary,
        selectTopic,selectDepartment,selectIndustry,selectTools,
        description,
        filename: req.file.filename,
        videoPath: `/uploads/blogdetail/${req.file.filename}`,
      };

      try {
        const updatedFile = await BlogDetail.create(fileData);
        return res.status(200).json({ data: updatedFile });
      } catch (error) {
        console.error('Error updating or saving file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const files = await BlogDetail.find({})
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      const file = await BlogDetail.findById(id).populate('blogSeo blogQuestions');
      if (!file) {
        return res.status(404).json({ error: 'File not found' });
      }

      // Delete associated BlogSeoDetail if exists
      if (file.blogSeo) {
        await BlogSeoDetail.findByIdAndDelete(file.blogSeo);
      }

      // Delete associated BlogQuestions if exists
      if (file.blogQuestions && Array.isArray(file.blogQuestions)) {
        for (const questionId of file.blogQuestions) {
          const question = await BlogQuestion.findById(questionId).populate('blogSubQuestion');
          
          // Delete question files if exists
          if (question?.filename && Array.isArray(question.filename)) {
            for (const questionFile of question.filename) {
              const filePath = path.join(uploadDirectory1, questionFile);
              if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
              }
            }
          }

          // Delete associated SubQuestions if exists
          if (question?.blogSubQuestion) {
            await SubQuestions.findByIdAndDelete(question.blogSubQuestion);
          }

          // Finally, delete the BlogQuestion
          await BlogQuestion.findByIdAndDelete(questionId);
        }
      }

      // Delete the file from the filesystem
      fs.unlinkSync(path.join(uploadDirectory, file.filename));

      // Delete the BlogDetail document itself
      await BlogDetail.findByIdAndDelete(id);

      return res.status(200).json({ message: 'File and related documents removed successfully' });
    } catch (error) {
      console.error('Error deleting file:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
