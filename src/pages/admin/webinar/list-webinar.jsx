import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const fetchWebinars = async () => {
  return await (await fetch("/api/webinar/webinar")).json();
};

const Listwebinar = () => {
  const [webinars, setWebinars] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (id) => {
    const webinar = webinars.find((w) => w.id === id);
    setFormData(webinar);
    setEditingId(id);
  };

  useEffect(() => {
    fetchWebinars().then((res) => {
      setWebinars(res || []);
    });
  }, []);

  const handleDelete = async (id) => {
    const data = await fetch(`/api/webinar/${id}`, {
      method: "DELETE",
    });
    if (data?.ok) {
      alert("webinar deleted successfully");
      fetchWebinars().then((res) => {
        setWebinars(res || []);
      });
    } else {
      alert("something went wrong");
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
                Webinar Type
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  ">
            {webinars.map((webinar) => (
              <tr key={webinar.id} className="border border-black">
                <td className="px-6 py-3 text-center border border-black">
                  <img
                    src={webinar.path}
                    alt={webinar.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  {webinar.title}
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  {webinar.selectType}
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  <div className="flex justify-center items-center space-x-2">
                    <Link href={`/admin/webinar/itinary/${webinar?._id}`}>
                      <button
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                        onClick={() => handleEdit(webinar.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => handleDelete(webinar._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Listwebinar;
