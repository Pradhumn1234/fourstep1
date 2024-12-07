
import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
const fetchAllVideos = async () => {
  return await (await fetch("/api/videos/video", { method: "GET" })).json();
};

const ListingVideo = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchAllVideos().then((res) => {
      setVideos(res?.data || []);
      // console.log(" __________---------------..........", videos);
    });
  }, []);
  const handleDelete = async (id) => {
    const data = await fetch(`/api/videos/${id}`, {
      method: "DELETE",
    });
    // console.log("handle deleted ----> ", id);
    if (data?.ok) {
      alert("data deleted successfully");
      fetchAllVideos().then((res) => {
        setVideos(res?.data || []);
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
                Industry
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  ">
            {videos.map((video) => (
              <tr key={video._id} className="border border-black">
                <td className="px-6 py-3 text-center border border-black">
                  <Image
                    src={video.path}
                    alt={video.title}
                    className="h-20 w-20 object-cover rounded"
                    height={200}
                    width={200}
                  />
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  {video.title}
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  {video.industry}
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  <div className="flex justify-center items-center space-x-2">
                    <Link href={`/admin/demovideo/${video?._id}`}>
                      <button className="text-blue-500 hover:text-blue-700 transition-colors">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => handleDelete(video._id)}
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

export default ListingVideo;
