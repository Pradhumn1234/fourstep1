import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ResultMatrix=({casestudyData, setActiveTab })=> {
  const [aboutEditorHtml, setAboutEditorHtml] = useState("");
  useEffect(()=>{
   
    if(casestudyData?.length>0){
      setAboutEditorHtml(casestudyData?.[0]?.result?.description)
    }

  },[casestudyData])
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };

  const handleAboutEditorChange = (html) => {
    setAboutEditorHtml(html);
  };

  const handleSubmit = async () => {
    try {
      const data=await fetch('/api/casestudy/result',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({aboutEditorHtml,casestudy:casestudyData?.[0]?._id})
       })
       if(data?.ok){
        alert("Rsults & Matrix data saved!");
        setActiveTab("Tab5"); 
       }
       else{
        alert("something went wrong");
       }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving the overview data.");
    }
  };

  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div className="md:mb-0 mb-5">
        <p className="pb-2 font-semibold text-para">challenge & Solution</p>

        <div className="w-full h-44">
          <QuillNoSSRWrapper
            className="rounded h-32"
            theme="snow"
            value={aboutEditorHtml}
            onChange={handleAboutEditorChange}
            modules={modules}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-black text-white w-full rounded py-2"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
}
export default ResultMatrix
