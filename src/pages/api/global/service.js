import productService from "@/models/admin/product/service";
import dbConnect from "@/utils/db";
export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const services = await productService.find({});
        res.status(200).json({ success: true, data: services });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "POST":
      try {
        const newService = await productService.create(req.body);
        res.status(201).json({ success: true, data: newService });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "PUT":
      try {
        const { id, name } = req.body;
        const updatedService = await productService.findByIdAndUpdate(
          id,
          { name },
          { new: true }
        );
        res.status(200).json({ success: true, data: updatedService });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.body;
        await productService.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
