// import AdminLayout from "@/Component/admin/AdminLayout";
// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
// const TestimonialList = () => {
//   return (
//     <AdminLayout>
//       <div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left text-sm font-light border-collapse border border-black shadow-lg">
//             <thead>
//               <tr className="bg-gray-700 text-white font-bold text-[17px]">
//                 <th className="px-6 py-3 text-center border border-black">
//                   Image
//                 </th>
//                 <th className="px-6 py-3 text-center border border-black">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-center border border-black">
//                   Designation
//                 </th>
//                 <th className="px-6 py-3 text-center border border-black">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {/* {allTeamMember?.data?.map((webinar) => ( */}
//               <tr className="border border-black">
//                 <td className="px-6 py-3 text-center border border-black">
//                   <img
//                     //   src={webinar?.path}
//                     //   alt={webinar?.altText}
//                     className="h-16 w-16 object-cover rounded"
//                   />
//                 </td>

//                 <>
//                   <td className="px-6 py-3 text-center border border-black">
//                     {/* {webinar.name} */}fwefwfefe
//                   </td>
//                   <td className="px-6 py-3 text-center border border-black">
//                     {/* {webinar.designation} */}dwfdwdwdw
//                   </td>
//                   <td className="px-6 py-3 text-center border border-black">
//                     <div className="flex justify-center items-center space-x-2">
//                       <Link
//                         className="text-blue-500 hover:text-blue-700 transition-colors"
//                         //   href={"/admin/teams/" + webinar._id + "?type=edit"}
//                         href="/"
//                       >
//                         <FontAwesomeIcon icon={faEdit} />
//                       </Link>
//                       <button
//                         className="text-red-500 hover:text-red-700 transition-colors"
//                         //   onClick={() => handleDelete(webinar._id)}
//                       >
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button>
//                     </div>
//                   </td>
//                 </>
//               </tr>
//               {/* ))} */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default TestimonialList;

import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonial/testimonial");
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);
  const handleDelete = async (id) => {
    const response = await fetch(`/api/testimonial/testimonial?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setTestimonials(testimonials.filter((item) => item._id !== id));
      alert("testimonial deleted");
    } else {
      alert("Failed to delete testimonial");
    }
  };

  return (
    <AdminLayout>
      <div>
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
              {testimonials.map((testimonial) => (
                <tr key={testimonial._id} className="border border-black">
                  <td className="px-6 py-3 text-center border border-black">
                    <img
                      src={testimonial.path}
                      alt={testimonial.alt}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    {testimonial.name}
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    {testimonial.designation}
                  </td>
                  <td className="px-6 py-3 text-center border border-black">
                    <div className="flex justify-center items-center space-x-2">
                      <Link
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                        href={`/admin/testimonial/${testimonial._id}`} // Correct path to your edit page
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => handleDelete(testimonial._id)}
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
      </div>
    </AdminLayout>
  );
};

export default TestimonialList;
