
import BlogDetail from '@/models/admin/blog copy/BlogDetail';
import dbConnect from '@/utils/db';

const apiRoute = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const { title } = req.query;
      if (!title) {
        return res.status(400).json({ error: 'Missing title' });
      }

    
      const formattedTitle = title.split("-").join(" ");

 
      const blogPost = await BlogDetail.findOne({ title: formattedTitle })
        .populate("blogSeo category") 
        .populate({
          path: "blogQuestions", 
          populate: {
            path: "blogSubQuestion", 
          }
        });
      if (!blogPost) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      return res.status(200).json({ data: blogPost });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;
