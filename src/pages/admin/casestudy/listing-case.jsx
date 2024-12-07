import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const fetchAllProducts=async ()=>{
  return await((await fetch('/api/casestudy/casestudy',{method:"GET"})).json());
}

const ListingProduct = () => {

  const [products,setProducts]=useState([]);
useEffect(()=>{
  fetchAllProducts().then(res=>{
    setProducts(res?.data||[])
  });
},[])
const handleDelete=async (id)=>{
  const data=await fetch(`/api/casestudy/${id}`,{
    method:"DELETE"
  })
  // console.log("handle deleted ----> ",id);
  if(data?.ok){
    alert("data deleted successfully")
    fetchAllProducts().then(res=>{
      setProducts(res?.data||[])
    });
  }else{
    alert("something went wrong")
  }
}


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
              {/* <th className="px-6 py-3 text-center border border-black">
                Service
              </th> */}
              <th className="px-6 py-3 text-center border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  ">
            {products.map((webinar) => (
              <tr key={webinar.id} className="border border-black">
                <td className="px-6 py-3 text-center border border-black">
                  <img
                    src={webinar?.path}
                    alt={webinar?.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-3 text-center border border-black">
                  {webinar?.title}
                </td>
                {/* <td className="px-6 py-3 text-center border border-black">
                  {webinar?.service}
                </td> */}
                <td className="px-6 py-3 text-center border border-black">
                  <div className="flex justify-center items-center space-x-2">
                    <Link href={`/admin/casestudy/${webinar?._id}`}>
                      <button
                        className="text-blue-500 hover:text-blue-700 transition-colors"
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

export default ListingProduct;
