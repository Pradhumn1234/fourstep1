import dbConnect from '@/utils/db';
import Industry from '@/models/admin/global/industries';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const industries = await Industry.find({});
      res.status(200).json({ success: true, data: industries });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
