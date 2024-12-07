import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";
import { useState, useEffect } from "react";

const TestimonialBG = () => {
  const [alt, setAlt] = useState(""); // Alt text state
  const [image, setImage] = useState(null); // Image file state
  const [preview, setPreview] = useState(""); // Image preview state
  const [submittedImages, setSubmittedImages] = useState([]); // Submitted images state

  // Fetch submitted images on component mount
  useEffect(() => {
    fetchSubmittedImages();
  }, []);

  // Function to fetch all submitted testimonials from the server
  const fetchSubmittedImages = async () => {
    try {
      const res = await fetch("/api/testimonial/banner-testimonial", {
        method: "GET",
      });
      const data = await res.json();
      setSubmittedImages(data); // Assume the API returns an array of submitted images
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  // Handle image file change and generate preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // Generate preview URL
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("alt", alt); // Append alt text
    formData.append("image", image); // Append image file

    const res = await fetch("/api/testimonial/banner-testimonial", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.message) {
      alert(data.message);
    } else if (data.error) {
      alert(`Error: ${data.error}`);
    } else {
      alert("Testimonial background banner uploaded successfully");

      // Fetch updated list of submitted images
      fetchSubmittedImages();

      // Clear form inputs
      setAlt("");
      setImage(null);
      setPreview("");
    }
  };

  // Handle delete request
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/testimonial/banner-testimonial?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Remove the image from the list after successful deletion
        fetchSubmittedImages();
      } else {
        alert("Error deleting image.");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Upload Testimonial Background
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="imageUpload"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="*/*" // Allow any file type
              onChange={handleImageChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {preview && (
            <div className="mb-4">
              <h3 className="text-sm font-medium">Image Preview:</h3>
              <Image
                src={preview}
                alt="Image Preview"
                height={200}
                width={200}
                className="rounded-md mt-2"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="altText">
              Alt Text
            </label>
            <input
              type="text"
              id="altText"
              placeholder="Enter alt text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Submitted Images:</h2>
          {submittedImages.length > 0 ? (
            <ul className="space-y-4">
              {submittedImages.map((item, index) => (
                <li key={item._id} className="flex items-center space-x-4">
                  <Image
                    src={item.path}
                    alt={item.alt}
                    height={100}
                    width={100}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-sm">{item.alt}</p>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No images submitted yet.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default TestimonialBG;
