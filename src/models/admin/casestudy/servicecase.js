import mongoose from "mongoose";

const casestudyserviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.models.CaseStudyService ||
  mongoose.model("CaseStudyService", casestudyserviceSchema);
