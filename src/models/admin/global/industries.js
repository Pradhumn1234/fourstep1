import mongoose from 'mongoose';

const IndustrySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.models.Industry || mongoose.model('Industry', IndustrySchema);
