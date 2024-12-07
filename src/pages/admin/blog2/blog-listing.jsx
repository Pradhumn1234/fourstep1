import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

// Updated fetchBlogs function to handle the response correctly
const fetchBlogs = async () => {
  try {
    const res = await fetch("/api/blog/promoblog");
    const data = await res.json();
    // Ensure we access the 'data' array from the response
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (id) => {
    const blog = blogs.find((b) => b._id === id); // Match using '_id' from your response
    setFormData(blog);
    setEditingId(id);
  };

  useEffect(() => {
    fetchBlogs().then((res) => {
      setBlogs(res); // Set blogs data when fetched successfully
    });
  }, []);

  const handleDelete = async (id) => {
    const data = await fetch(`/api/blog/promoblog/${id}`, {
      method: "DELETE",
    });
    if (data?.ok) {
      alert("Blog deleted successfully");
      fetchBlogs().then((res) => {
        setBlogs(res); // Refresh the list after deletion
      });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <AdminLayout>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light border-collapse border border-black shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-white font-bold text-[17px]">
              <th className="px-6 py-3 text-center border border-black">
                Image
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Title
              </th>

              <th className="px-6 py-3 text-center border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Array.isArray(blogs) && blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog._id} className="border border-black">
                  <td className="px-6 py-3 text-center border border-black">
                    <Image
                      src={blog.path} // Ensure 'path' is the correct field for the image URL
                      alt={blog.title}
                      className="h-16 w-16 object-cover rounded"
                      height={200}
                      width={200}
                    />
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    {blog.title}
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    <div className="flex justify-center items-center space-x-2">
                      <Link href={`/admin/blog/${blog?._id}`}>
                        <button
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                          onClick={() => handleEdit(blog?._id)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      <button
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => handleDelete(blog?._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-3">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default BlogListing;
