import multer from 'multer';
import path from 'path';
import fs from 'fs';
import connectToDatabase from '@/utils/db';
const uploadDirectory = './public/uploads/images';
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

const upload = multer({ storage }).single('file');

export default function handler(req, res) {
  connectToDatabase().then(res=>console.log("database connected"));
  
  if (req.method === 'POST') {
    try {
      upload(req, res, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Image upload failed' });
        }
        const imageUrl = `/uploads/images/${req.file?.filename}`;
        return res.status(200).json({ url: imageUrl });
      });
    } catch (error) {
      return res.status(500).json({ error: 'Image upload failed',error });
    }
    
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
