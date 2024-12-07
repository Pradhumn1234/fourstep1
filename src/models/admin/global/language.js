import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Language= mongoose.models?.Language || mongoose.model("Language", LanguageSchema);
export default Language
