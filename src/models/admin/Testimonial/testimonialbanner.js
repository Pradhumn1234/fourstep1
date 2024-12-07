import mongoose from "mongoose";

const testimonialBannerSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "", // Optional field
  },
});

// Check if the model already exists to avoid recompilation errors
const TestimonialBanner =
  mongoose.models.TestimonialBanner || mongoose.model("TestimonialBanner", testimonialBannerSchema);

export default TestimonialBanner;
