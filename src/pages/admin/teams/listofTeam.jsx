import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const initialWebinars = [];
const fetchAllTeamMember = async () => {
  const response = await fetch("/api/team");
  return await response.json();
};
const ListofTeam = () => {
  const [webinars, setWebinars] = useState(initialWebinars);
  const [formData, setFormData] = useState({});
  const [allTeamMember, setAllTeamMember] = useState([]);
  useEffect(() => {
    fetchAllTeamMember().then((res) => {
      setAllTeamMember(res || []);
    });
  }, []);

  // const handleEdit = (id) => {
  //   const webinar = webinars.find((w) => w.id === id);
  //   setFormData(webinar);
  //   setEditingId(id);
  // };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setWebinars(webinars.filter((webinar) => webinar._id !== id));
    }
  };

  // const handleInputChange = (field, value) => {
  //   setFormData({ ...formData, [field]: value });
  // };

  // const handleBlur = () => {
  //   const updatedWebinars = webinars.map((webinar) =>
  //     webinar.id === editingId ? formData : webinar
  //   );
  //   setWebinars(updatedWebinars);
  //   setEditingId(null);
  // };

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
                Name
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Designation
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {allTeamMember?.data?.map((webinar) => (
              <tr key={webinar._id} className="border border-black">
                <td className="px-6 py-3 text-center border border-black">
                  <img
                    src={webinar?.path}
                    alt={webinar?.altText}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>

                <>
                  <td className="px-6 py-3 text-center border border-black">
                    {webinar.name}
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    {webinar.designation}
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    <div className="flex justify-center items-center space-x-2">
                      <Link
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                        href={"/admin/teams/" + webinar._id + "?type=edit"}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => handleDelete(webinar._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ListofTeam;
