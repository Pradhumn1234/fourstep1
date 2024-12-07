import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCirclePlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function Highlight({ webinarData, setActiveTab }) {
  const [aboutEditorHtml, setAboutEditorHtml] = useState("");
  const [webinarId, setWebinarId] = useState(null);
  useEffect(() => {
    setWebinarId(webinarData?._id || null);
    setAboutEditorHtml(webinarData?.highlights?.description || "");
  }, [webinarData]);
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
    const data = await fetch("/api/webinar/highlight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aboutEditorHtml, webinar: webinarId }),
    });
    if (data?.ok) {
      alert("overview data saved");
      setActiveTab("Tab4");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div className="md:mb-0 mb-5">
        <p className="pb-2 font-semibold text-para">Hightlight</p>

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
