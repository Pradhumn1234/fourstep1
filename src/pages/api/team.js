
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Teammember from '@/models/admin/Teammember';
import dbConnect from '@/utils/db';
const uploadDirectory = './public/uploads/TeamImages';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}
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
await dbConnect()
  if (req.method === 'POST') {
    upload.single('file')(req, File, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }
      const { name,description,designation,link1,link2,altText } = req.body;
      const fileData = req.file && {
        name,
        description,
        designation,
        link1,
        link2,
        altText,
        filename:req.file.filename,
        path: `/uploads/TeamImages/${req.file.filename}`,
      }
      console.log("fileData------------------------------------> ",fileData)
      try {   
          const file =await Teammember.create(fileData);
          return res.status(200).json({ data: file });
      } catch (error) {
        console.error('Error updating or saving file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    try {
     
      const files = await Teammember.find({});
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }  else {
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
