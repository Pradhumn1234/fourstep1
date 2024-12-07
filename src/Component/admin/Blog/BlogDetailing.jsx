// import React from "react";

// const BlogDetailing = () => {
//   return (
//     <div>
//       <h6>BlogDetailing sectin </h6>
//     </div>
//   );
// };

// export default BlogDetailing;


import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically load React-Quill for SSR compatibility
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function BlogDetailing({ setActiveTab, blogData }) {
  const [aboutEditorHtml, setAboutEditorHtml] = useState("");

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
      ["image", "link"],
    ],
  };

  const handleAboutEditorChange = (html) => {
    setAboutEditorHtml(html);
  };

  const handleSubmit = async () => {
    try {
      // Simulate saving data
      alert("Overview data saved!");
      setActiveTab("Tab3"); // Switch to the next tab
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving the overview data.");
    }
  };

  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div className="md:mb-0 mb-5">
        <p className="pb-2 font-semibold text-gray-600">Overview</p>
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
        className="bg-black text-white w-full rounded py-2 hover:bg-gray-800 transition"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
}
