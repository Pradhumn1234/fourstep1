import mongoose from "mongoose";
const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
