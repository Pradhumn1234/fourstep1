import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import AdminLayout from "@/Component/admin/AdminLayout";
import { useAppContext } from "@/Component/Context/context";
import { useRouter } from "next/router";

const ListingUser = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch("/api/user/user");
        const data = await response.json();
        setUsers(data);
      };
  
      fetchUsers();
    }, []);
  const handleEdit = (id) => {
    router.push(`/admin/user/${id}`);
  };
  const handleDelete = async (id) => {
    // Send DELETE request with userId as a query parameter
    const response = await fetch(`/api/user/user?userId=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setUsers(users.filter((user) => user._id !== id));
      alert("user delete succefully");
    } else {
      console.error("Failed to delete user");
    }
  };

  return (
    <AdminLayout>
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border border-gray-300 text-left">
                Image
              </th>
              <th className="py-3 px-4 border border-gray-300 text-left">
                Name
              </th>
              <th className="py-3 px-4 border border-gray-300 text-left">
                Role
              </th>
              <th className="py-3 px-4 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100 transition">
                <td className="py-3 px-4 border border-gray-300">
                  {user.image && (
                    <Image
                      src={user.image.path}
                      alt={user.alt}
                      width={100}
                      height={100}
                      className="rounded object-cover"
                    />
                  )}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  {user.name}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  {user.role}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 flex space-x-2">
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ListingUser;
