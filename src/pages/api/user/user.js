import dbConnect from "@/utils/db";
import User from "@/models/admin/user";
import multer from "multer";
import path from "path";
import fs from "fs";

// Create the uploads directory if it doesn't exist
const uploadsDir = "./public/uploads/UserImages";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as multer will handle it
  },
};

const handler = upload.single("image"); // Expecting a single image field named 'image'

const userHandler = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    handler(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "Image upload failed." });
      }

      const { name, email, phone, description, role, jobProfile, alt } =
        req.body;

      // Create a new user instance
      const newUser = new User({
        name,
        email,
        phone,
        description,
        role,
        jobProfile,
        image: {
          filename: req.file.filename,
          path: `/uploads/UserImages/${req.file.filename}`,
        },
        alt,
      });

      try {
        await newUser.save();
        return res.status(201).json({ message: "User created successfully!" });
      } catch (error) {
        return res.status(500).json({ error: "Failed to save user data." });
      }
    });
  }

  // else if (req.method === "GET") {
  //   // Handle GET request for fetching user data
  //   try {
  //     const users = await User.find({}); // Fetch all users
  //     return res.status(200).json(users); // Respond with the list of users
  //   } catch (error) {
  //     return res.status(500).json({ error: "Failed to fetch users." });
  //   }
  // }
  else if (req.method === "GET") {
    // Handle GET request for fetching user data
    const { userId } = req.query; // Get userId from the query parameters

    try {
      // Check if a specific user ID is provided
      if (userId) {
        // Validate that userId is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
          return res.status(400).json({ error: "Invalid ID format." });
        }

        // Fetch the user by ID
        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ error: "User not found." });
        }

        return res.status(200).json(user); // Respond with the specific user data
      } else {
        // No userId provided, fetch all users
        const users = await User.find({});
        return res.status(200).json(users); // Respond with the list of users
      }
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch user(s)." });
    }
  } else if (req.method === "PUT") {
    // Handle PUT request for updating user data
    handler(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "Image upload failed." });
      }
      const { name, email, phone, description, role, jobProfile, alt } =
        req.body;
      const { id } = req.query;

      const data = await User.findOne({ _id: id });
      if (data) {
        fs.unlinkSync(path.join(uploadsDir, data?.image?.filename));
      }

      try {
        const updatedUser = await User.findOneAndReplace(
          { _id: id },
          {
            name,
            email,
            phone,
            description,
            role,
            jobProfile,
            image: {
              filename: req.file.filename,
              path: `/uploads/UserImages/${req.file.filename}`,
            },
            alt,
          },
          { new: true }
        );

        if (!updatedUser) {
          return res.status(404).json({ error: "User not found." });
        }
        return res
          .status(200)
          .json({ message: "User updated successfully!", user: updatedUser });
      } catch (error) {
        return res.status(500).json({ error: "Failed to update user data." });
      }
    });
  } else if (req.method === "DELETE") {
    // Handle DELETE request for deleting a user
    const { userId } = req.query;
    const data = await User.findOne({ _id: userId });
    if (data) {
      fs.unlinkSync(path.join(uploadsDir, data?.image?.filename));
    }

    try {
      const deletedUser = await User.findByIdAndDelete({ _id: userId });

      if (!deletedUser) {
        return res.status(404).json({ error: "User not found." });
      }
      return res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to delete user.", error });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]); // Allow methods
    return res.status(405).end(`Method ${req.method} Not Allowed`); // Handle unsupported methods
  }
};

export default userHandler;
