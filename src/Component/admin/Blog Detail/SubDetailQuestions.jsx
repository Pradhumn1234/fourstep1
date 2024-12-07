import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import DeletePop from "../../iternaryPopup/DeletePop";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const questionsData=async (id)=>{
  return await ((await fetch(`/api/blog/blogquestion?blog=${id}`)).json());
}

const SubDetailQuestions = ({setSubQuestionState,subQueID}) => {
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState(
    []
  );

  // const [deletePopup, setDeletePopu] = useState(false);
  const [editorHtmlQuestion, setEditorHtmlQuestion] = useState("");
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);
  const [itineraryValidate, setItineraryValidate] = useState("");


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
      ['link'],
    ],
  };
  useEffect(()=>{
    if(subQueID){
      questionsData(subQueID).then(res=>{setItineraryDayWiseDataArray(res?.data1?.blogSubQuestion?.questions||[])});
    }
   
  },[subQueID])

  // console.log("editorHtmlDescription--------------> ",editorHtmlDescription);

  // Add or Update functionality
  const handleAddOrUpdate = () => {
    if (
      !editorHtmlQuestion ||
      editorHtmlDescription.trim() === ""
    ) {
      setItineraryValidate("Both question and description are required.");
      return;
    }

    const newEntry = {
      title: editorHtmlQuestion,
      information: editorHtmlDescription,
    };

    if (editingIndex !== null) {
      // Update existing entry
      const updatedArray = [...itineraryDayWiseDataArray];
      updatedArray[editingIndex] = newEntry;
      setItineraryDayWiseDataArray(updatedArray);
      setEditingIndex(null);
    } else {
      // Add new entry
      setItineraryDayWiseDataArray([...itineraryDayWiseDataArray, newEntry]);
    }
    setEditorHtmlQuestion("");
    setEditorHtmlDescription("");
    setItineraryValidate("");
  };

  // Delete functionality
  const handleDelete = (index) => {
    const updatedArray = itineraryDayWiseDataArray.filter(
      (_, i) => i !== index
    );
    setItineraryDayWiseDataArray(updatedArray);
  };

  // Edit functionality
  const handleEdit = (index) => {
    const entryToEdit = itineraryDayWiseDataArray[index];
    setEditorHtmlQuestion(entryToEdit.title);
    setEditorHtmlDescription(entryToEdit.information);
    setEditingIndex(index);
  };

  const handleSaveData= async ()=>{

    try {
      const data = await fetch("/api/blog/blogquestion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({questions:itineraryDayWiseDataArray,blog:subQueID}),
    });
    if(data?.ok){
      alert("data added successfully")
      setSubQuestionState(false);
      // questionsData().then(res=>{
      //   setItineraryDayWiseDataArray(res?.data?.[0]?.questions||[])
      // });
    }
    } catch (error) {
      console.log("something went wrong")

    }

    // setActiveTab("Tab3")
   
  }
  return (
    <div className="px-4 py-4 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
      <h2 className="text-base font-semibold mb-2">Detail Table Question</h2>
      <div>
        <div className="border bg-white p-3 rounded">
          <div className="justify-between gap-5">
            <div className="border p-4 rounded-md bg-white grow mb-2">
              <div>
                <label className="pb-2 font-semibold text-para">
                  Questions
                </label>
                {/* <div className="w-full">
                  <QuillNoSSRWrapper
                    className="rounded h-48"
                    theme="snow"
                    value={editorHtmlQuestion}
                    onChange={setEditorHtmlQuestion}
                    placeholder="Enter Your Questions"
                    modules={modules}
                  />
                </div> */}
                <div className="grow flex gap-5 items-center">
                  <input
                    className="border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none"
                    type="text"
                    id="title"
                    name="title"
                    value={editorHtmlQuestion}
                    onChange={(e)=>setEditorHtmlQuestion(e.target.value)}
                    placeholder="Enter the Questions"
                  />
                </div>
              </div>
              <div className="md:mt-12 mt-24">
                <label className="pb-2 font-semibold text-para">
                  Descriptions
                </label>
                <div className="w-full">
                  <QuillNoSSRWrapper
                    className="rounded h-48"
                    theme="snow"
                    value={editorHtmlDescription}
                    onChange={setEditorHtmlDescription}
                    placeholder="Enter Your Answer"
                    modules={modules}
                  />
                </div>
                <div className="md:pt-12 pt-24">
                  <button
                    onClick={handleAddOrUpdate}
                    className={` bg-black text-white md:w-auto w-full rounded px-10 py-1 cursor-pointer`}
                  >
                    {editingIndex !== null ? "Update" : "Add"}
                  </button>
                </div>
              </div>

              <hr className="my-3" />
              <div className="text-[15px]">
                <div>
                  <p>Questions Table</p>
                  {itineraryDayWiseDataArray?.map((item, index) => (
                    <div key={index}>
                      <div className="mt-1 flex justify-between gap-2 even:bg-slate-50 px-1">
                        <div>
                          <p className="capitalize flex gap-2 md:text-para text-sm">
                            <span>{index + 1}. </span>
                            <div
                              dangerouslySetInnerHTML={{ __html: item?.title }}
                            />
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="font1 cursor-pointer hover:text-primary"
                            onClick={() => handleEdit(index)}
                          />
                          {/* <FontAwesomeIcon
                            icon={faTrash}
                            className="font1 cursor-pointer hover:text-red-500"
                            onClick={() => handleDelete(index)}
                          /> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-red-700 capitalize">
                  {itineraryValidate}
                </span>
              </div>
            </div>
            <button onClick={handleSaveData} className="w-full rounded py-2 bg-black text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDetailQuestions;
