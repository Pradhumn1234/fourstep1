
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "@/Component/admin/AdminLayout";
import VideoSeoPromo from "@/Component/admin/VideoCreate/VideoSeoPromo";

export default function Management() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedPromoId, setSelectedPromoId] = useState(null);

  // Function to fetch existing image
  async function fetchImage() {
    try {
      const res = await fetch(`/api/videos/videopromo`);
      const data = await res.json();

      // console.log("data is here ---- of blog promo =======>  ",data?.data);
      if (data?.data) {
        setTitle(data?.data?.title);
        setDescription(data?.data?.description);
        setPreview(data?.data?.videoPath);
        setSelectedPromoId(data?.data?._id)
        setIsUpdating(true);
      }
      else{
        setTitle("")
        setDescription("")
        setPreview("")
        setSelectedPromoId(null)
        setIsUpdating(false)
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  // Fetch existing image on component mount
  useEffect(() => {
    fetchImage();
  }, []);

  // Function to handle file input change
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }
  // console.log("select type-submitted before  ",selectType)
  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (!file && !title) {
      alert("Please upload file and  write title");
      return;
    }
    // console.log("select type-submitted  ",selectType)
    
    if (file && title) {
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);
    }
    try {
      const res = await fetch("/api/videos/videopromo", {
        method: "POST",
        body: formData,
      });
    const data=await res.json();
    // console.log("data is submitted --> ",data);
      if (res.ok) {
        alert(`File ${isUpdating ? "updated" : "uploaded"} successfully`);
        // Optionally, reset form fields or update state after successful upload
        setSelectedPromoId(data?.data?._id);
        setIsUpdating(true)

        // Fetch updated image
      } else {
        alert(`File ${isUpdating ? "update" : "upload"} failed`);
      }
    } catch (error) {
      console.error(
        `Error ${isUpdating ? "updating" : "uploading"} file:`,
        error
      );
      alert(`File ${isUpdating ? "update" : "upload"} failed`);
    }
  }

  return (
    
      <AdminLayout>
        <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10">
          <FontAwesomeIcon icon={faCube} className="text-2xl" />
          <p className="md:text-[28px] text-xl text-black">
            Demo & Videos Promo Management
          </p>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className=" text-teal-700 text-xl"
          />
        </div>
        <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
          <p className="text-base font-semibold mb-2"> Demo & Videos Promo Banner</p>
          <div className="p-4">
            <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
              <div className=" flex flex-1 my-7">
                <input
                  type="file"
                  className="mb-4 ml-3"
                  onChange={handleChange}
                />
                <div>
                  {preview && (
                    <Image
                      className="md:w-36 w-auto h-auto shadow-md mb-4"
                      src={preview}
                      alt="Preview"
                      width={150}
                      height={200}
                    />
                  )}
                </div>
              </div>
              <div className="flex-1 my-5">
                <div>
                  <label htmlFor="title" className=" font-semibold">
                    Title
                  </label>
                  <input
                    className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Enter Title Here"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="textarea" className=" font-semibold">
                    Description
                  </label>
                  <textarea
                    name=""
                    id="textarea"
                    className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
                    placeholder="Enter Description Here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-3">
              <button
                className=" bg-black text-white px-3 py-2 w-full md:w-auto rounded"
                onClick={handleUpload}
              >
                {isUpdating ? "Update Image" : "Upload Image"}
              </button>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5 rounded">
          {isUpdating&&<VideoSeoPromo selectedPromoId={selectedPromoId} />}
        </div>
      </AdminLayout>
  
  );
}

