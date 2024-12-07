import React from "react";
import Image from "next/image";

const DemoPrentater = ({ videoPackageData }) => {
  const user = videoPackageData?.user || {};
  const userImagePath = videoPackageData?.user?.image?.path;

  console.log("User Image Path:", userImagePath);

  return (
    <div className="container mx-auto  pb-10">
      <div className="border md:flex rounded flex-col w-full  md:w-[735px] p-3 bg-white shadow-md h-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px,2fr] border px-2 py-2 gap-5">
          <div className="flex justify-center md:justify-start">
            <Image
              className="rounded-md object-cover"
              src={userImagePath || "/images/default-avatar.png"}
              alt={user?.name || "Default User"}
              height={300}
              width={300}
            />
          </div>

          <div className="flex px-2 flex-col justify-center md:space-y-2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600"> {user?.role}</p>
            <p className="text-sm "> {user?.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPrentater;
