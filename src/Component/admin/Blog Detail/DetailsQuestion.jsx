import dynamic from "next/dynamic";
import { use, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faPlus ,faMinus  } from "@fortawesome/free-solid-svg-icons";
import SubDetailQuestions from "./SubDetailQuestions";
import RichTextEditor from "../RichTextEditor";
const questionsData = async (id) => {
  return await (await fetch(`/api/blog/blogquestion/get?blog=${id}`)).json();
};
const questionsEditData = async (id) => {
  return await (await fetch(`/api/blog/blogquestion/edit?quesId=${id}`)).json();
};

const DetailsQuestion = ({ setActiveTab, blogData }) => {
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState(
    []
  );
  // const [deletePopup, setDeletePopu] = useState(false);
  const [editorHtmlQuestion, setEditorHtmlQuestion] = useState("");
  const [subQuestionState, setSubQuestionState] = useState(false);
  const [subQueID, setSubQueId] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);
  const [itineraryValidate, setItineraryValidate] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (blogData) {
      questionsData(blogData?._id).then((res) => {
        setItineraryDayWiseDataArray(res?.data1);
      });
    }
  }, [blogData]);
  // console.log("blog data is here----> ",blogData)
  // const modules = {
  //   toolbar: [
  //     [{ header: "1" }, { header: "2" }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ['link', 'image'],
  //   ],
  // };
  const [filename, setFilename] = useState([]);
  const [content, setContent] = useState("");

  // Edit functionality
  const handleEdit = (index, id) => {
    questionsEditData(id).then((res) => {
      
      setEditorHtmlQuestion(res?.data?.title || "");
      setContent(res?.data?.information || "");
      setFilename(res?.data?.filename || []);
    });
    setEditId(id);

    setEditingIndex(index);
  };


  // const handleDelete = async (id) => {
  //   const data = await fetch(`/api/blog/blogquestion/delete?quesId=${id}`, {
  //     method: "DELETE",
  //   });
  //   if (data?.ok) {
  //     alert("question successfully Deleted");
  //     if (blogData) {
  //       questionsData(blogData?._id).then((res) => {
  //         setItineraryDayWiseDataArray(res?.data1);
  //       });
  //     }
  //   } else {
  //     alert("something went wrong");
  //   }
  // };

  useEffect(() => {
    if (subQueID) {
      setSubQuestionState(true);
    }
  }, [subQueID]);

  const handleAddorUpdate = async () => {
    const newEntry = {
      title: editorHtmlQuestion,
      information: content,
    };
    try {
      const data = await fetch(
        `/api/blog/blogquestion/${
          editingIndex !== null ? `edit?quesId=${editId}` : "add"
        }`,
        {
          method: editingIndex !== null ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:
            editingIndex !== null
              ? JSON.stringify({
                  questions: newEntry,
                  blog: blogData?._id,
                  filename,
                })
              : JSON.stringify({
                  questions: newEntry,
                  blog: blogData?._id,
                  filename,
                }),
        }
      );
      if (data?.ok) {
        alert(
          blogData ? "data updated successfully" : "data added successfully"
        );
        setActiveTab("Tab3");
        if (blogData) {
          questionsData(blogData?._id).then((res) => {
            setItineraryDayWiseDataArray(res?.data1);
          });
        }
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };
  console.log("content is here -----> ",filename)

  return (
    <>
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
                      onChange={(e) => setEditorHtmlQuestion(e.target.value)}
                      placeholder="Enter the Questions"
                    />
                  </div>
                </div>
                <div className="md:mt-12 mt-24">
                  <label className="pb-2 font-semibold text-para">
                    Descriptions
                  </label>
                  <div className="w-full">
                    <RichTextEditor
                      content={content}
                      onContentChange={setContent}
                      setFilename={setFilename}
                      filename={filename}
                    />
                  </div>
                  <div className="md:pt-12 pt-24">
                    <button
                      onClick={handleAddorUpdate}
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
                               
                                dangerouslySetInnerHTML={{
                                  __html: item?.title,
                                }}
                              />
                            </p>
                          </div>
                          
                          <div className="flex gap-3">
                          {(subQuestionState&&subQueID===item?._id)?<FontAwesomeIcon
                              icon={faMinus}
                              className="font1 cursor-pointer hover:text-primary"
                              onClick={() => {
                                setSubQueId(null);
                                setSubQuestionState(false)
                              }}
                            />:<FontAwesomeIcon
                              icon={faPlus}
                              className="font1 cursor-pointer hover:text-primary"
                              onClick={() => {
                                setSubQueId(item?._id);
                              }}
                            />}
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="font1 cursor-pointer hover:text-primary"
                              onClick={() => {
                                handleEdit(index, item?._id);
                              }}
                            />
                            {/*<FontAwesomeIcon
                              icon={faTrash}
                              className="font1 cursor-pointer hover:text-red-500"
                              onClick={() => handleDelete(item?._id)}
                            />*/}
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
              {/* <button
            //  onClick={handleSaveData}
             className="w-full rounded py-2 bg-black text-white">
              Save
            </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {subQuestionState && (
          <SubDetailQuestions
            setSubQuestionState={setSubQuestionState}
            subQueID={subQueID}
          />
        )}
      </div>
    </>
  );
};

export default DetailsQuestion;
