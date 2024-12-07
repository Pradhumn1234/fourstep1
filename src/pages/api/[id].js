import multer from "multer";
import path from "path";
import fs from "fs";
import dbConnect from "@/utils/db";
import Teammember from "@/models/admin/Teammember";
const uploadDirectory = "./public/uploads/TeamImages";
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
  await dbConnect();

  if (req.method === "PUT") {
    const { id } = req.query;
    if (!id) {
      return res
        .status(300)
        .json({ message: "id is required to fetch the data" });
    }
    upload.single("file")(req, File, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "File upload failed" });
      } else if (err) {
        console.error("Unknown error during file upload:", err);
        return res.status(500).json({ error: "File upload failed" });
      }
      const { name, description, designation, link1, link2, altText } =
        req.body;
      const fileData = req.file && {
        name,
        description,
        designation,
        link1,
        link2,
        altText,
        filename: req.file.filename,
        path: `/uploads/TeamImages/${req.file.filename}`,
      };
      try {
        const files1 = await Teammember.findOne({ _id: id });
        // console.log("files-----------------------> ",files1);
        let file;
        if (files1) {
          fs.unlinkSync(path.join(uploadDirectory, files1.filename));
           file = await Teammember.findOneAndReplace({ _id: id }, fileData);
          return res.status(200).json({ data: file });
        }
        file=await Teammember.create(fileData);
        return res.status(200).json({ data: file });
      } catch (error) {
        console.error("Error updating or saving file:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } else if (req.method === "GET") {
    const { id } = req.query;
    try {
      if (!id) {
        return res
          .status(300)
          .json({ message: "id is required to fetch the data" });
      }
      const files1 = await Teammember.findOne({ _id: id });
      if (!files1) {
        return res
          .status(404)
          .json({ message: "data is not found to the corresponding id" });
      }
      return res.status(200).json({ data: files1 });
    } catch (error) {
      console.error("Error fetching files:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      const file = await Teammember.findById({ _id: id });
      if (file) {
        // console.log("file image id by selected logo ",file);
        fs.unlinkSync(path.join(uploadDirectory, file.filename));
        await Teammember.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: "File removed successfully" });
      } else {
        return res.status(404).json({ error: "File not found" });
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET", "DELETE"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
