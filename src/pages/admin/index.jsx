import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCirclePlus,
  faTrash,
  faXmark,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  // States for Industries
  const [industry, setIndustry] = useState("");
  const [industriesList, setIndustriesList] = useState([]);
  const [editIndustryId, setEditIndustryId] = useState(null);
  const [editIndustryValue, setEditIndustryValue] = useState("");

  // Fetch industries on component mount
  useEffect(() => {
    const fetchIndustries = async () => {
      const response = await fetch("/api/global/industries/getIndustries");
      const data = await response.json();
      setIndustriesList(data.data);
    };

    fetchIndustries();
  }, []);

  // Handle input change
  const handleIndustryChange = (e) => setIndustry(e.target.value);

  // Handle form submission to add new industry
  const handleSubmitIndustry = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/global/industries/addIndustry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: industry }),
    });

    if (response.ok) {
      const newIndustry = await response.json();
      setIndustriesList([...industriesList, newIndustry.data]);
      setIndustry("");
      alert("Industry added successfully!");
    }
  };

  // Toggle edit mode for an industry
  const toggleEditIndustry = (id) => {
    if (editIndustryId === id) {
      setEditIndustryId(null);
      setEditIndustryValue("");
    } else {
      setEditIndustryId(id);
      const industryToEdit = industriesList.find((item) => item._id === id);
      setEditIndustryValue(industryToEdit.name);
    }
  };

  // Save edited industry
  const saveEditIndustry = async (id) => {
    try {
      const response = await fetch(
        `/api/global/industries/editIndustry?id=${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: editIndustryValue }),
        }
      );

      if (response.ok) {
        const updatedIndustry = await response.json();
        const updatedIndustries = industriesList.map(
          (item) => (item._id === id ? updatedIndustry.data : item) // Update the specific industry
        );
        setIndustriesList(updatedIndustries); // Set the updated list
        setEditIndustryId(null); // Clear edit state
        setEditIndustryValue(""); // Clear input
        alert("Industry updated successfully!");
      } else {
        const errorResponse = await response.json();
        alert(`Error updating industry: ${errorResponse.message}`);
      }
    } catch (error) {
      console.error("Error updating industry:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  // Handle industry deletion
  const handleDeleteIndustry = async (id) => {
    const response = await fetch(
      `/api/global/industries/deleteIndustry?id=${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const filteredIndustries = industriesList.filter(
        (item) => item._id !== id
      );
      setIndustriesList(filteredIndustries);
      alert("Industry deleted successfully!");
    }
  };

  // STATES FOR TOOLS
  const [tool, setTool] = useState("");
  const [toolsList, setToolsList] = useState([]);
  const [editToolId, setEditToolId] = useState(null);
  const [editToolValue, setEditToolValue] = useState("");

  // Fetch tools on component mount
  useEffect(() => {
    const fetchTools = async () => {
      const response = await fetch("/api/global/tools/toolsoftware");
      const data = await response.json();
      setToolsList(data.data);
    };

    fetchTools();
  }, []);

  // Handle input change
  const handleToolChange = (e) => setTool(e.target.value);

  // Handle form submission to add new tool
  const handleSubmitTool = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/global/tools/toolsoftware", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: tool }),
    });

    if (response.ok) {
      const newTool = await response.json();
      setToolsList([...toolsList, newTool.data]);
      setTool("");
      alert("Tool added successfully!");
    } else {
      const errorResponse = await response.json();
      alert(`Error adding tool: ${errorResponse.message}`);
    }
  };

  // Toggle edit mode for a tool
  const toggleEditTool = (id) => {
    if (editToolId === id) {
      setEditToolId(null);
      setEditToolValue("");
    } else {
      setEditToolId(id);
      const toolToEdit = toolsList.find((item) => item._id === id);
      setEditToolValue(toolToEdit.name);
    }
  };

  // Save edited tool
  const saveEditTool = async (id) => {
    try {
      const response = await fetch(`/api/global/tools/toolsoftware`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name: editToolValue }), // Send id and name in the body
      });

      if (response.ok) {
        const updatedTool = await response.json();
        const updatedTools = toolsList.map(
          (item) => (item._id === id ? updatedTool.data : item) // Update the specific tool
        );
        setToolsList(updatedTools); // Set the updated list
        setEditToolId(null); // Clear edit state
        setEditToolValue(""); // Clear input
        alert("Tool updated successfully!");
      } else {
        const errorResponse = await response.json();
        alert(`Error updating tool: ${errorResponse.message}`);
      }
    } catch (error) {
      console.error("Error updating tool:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  // Handle tool deletion
  const handleDeleteTool = async (id) => {
    const response = await fetch(`/api/global/tools/toolsoftware?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const filteredTools = toolsList.filter((item) => item._id !== id);
      setToolsList(filteredTools); // Update tools list
      alert("Tool deleted successfully!");
    } else {
      const errorResponse = await response.json();
      alert(`Error deleting tool: ${errorResponse.message}`);
    }
  };

  //  topic section
  const [topic, setTopic] = useState("");
  const [topicsList, setTopicsList] = useState([]);
  const [editTopicId, setEditTopicId] = useState(null);
  const [editTopicValue, setEditTopicValue] = useState("");

  const fetchTopics = async () => {
    try {
      const response = await fetch("/api/global/topic/gettopic");
      if (response.ok) {
        const result = await response.json();
        setTopicsList(result.result);
      } else {
        console.error("Error fetching topics");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    fetchTopics(); // Load topics when the component mounts
  }, []);

  const handleSubmitTopic = async (e) => {
    e.preventDefault();
    if (!topic) return;

    try {
      const response = await fetch("/api/global/topic/addtopic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: topic }),
      });
      if (response.ok) {
        const data = await response.json();
        setTopicsList((prev) => [...prev, data.data]);
        setTopic("");
        alert("topic added successfully!");
      } else {
        console.error("Error adding topic");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const toggleEditTopic = (id) => {
    setEditTopicId(id === editTopicId ? null : id);
    if (id) {
      const topicToEdit = topicsList.find((item) => item._id === id);
      setEditTopicValue(topicToEdit.name);
    } else {
      setEditTopicValue("");
    }
  };

  const saveEditTopic = async (id) => {
    try {
      const response = await fetch(`/api/global/topic/edittopic?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editTopicValue }),
      });
      if (response.ok) {
        const updatedTopic = await response.json();
        setTopicsList((prev) =>
          prev.map((topic) => (topic._id === id ? updatedTopic.data : topic))
        ); // Update the list with the edited topic
        setEditTopicId(null);
        setEditTopicValue("");
      } else {
        console.error("Error updating topic");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const handleDeleteTopic = async (id) => {
    try {
      const response = await fetch(`/api/global/topic/delete?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTopicsList((prev) => prev.filter((topic) => topic._id !== id));

        alert("DELETED successfully!");
      } else {
        console.error("Error deleting topic");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  // States for Languages
  const [language, setLanguage] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [editLanguageId, setEditLanguageId] = useState(null);
  const [editLanguageValue, setEditLanguageValue] = useState("");

  const fetchLanguages = async () => {
    try {
      const response = await fetch("/api/global/language/getlanguages");
      if (response.ok) {
        const result = await response.json();
        setLanguagesList(result.data);
      }
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  };

  const handleAddLanguage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/global/language/addlanguage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: language }),
      });
      if (response.ok) {
        fetchLanguages();
        setLanguage("");
        alert("languages added successfully!");
      }
    } catch (error) {
      console.error("Error adding language:", error);
    }
  };

  const handleEditLanguage = async (id) => {
    try {
      const response = await fetch("/api/global/language/editlanguage", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name: editLanguageValue }),
      });
      if (response.ok) {
        fetchLanguages(); // Refresh list
        setEditLanguageId(null);
        setEditLanguageValue("");
      }
    } catch (error) {
      console.error("Error editing language:", error);
    }
  };

  const handleDeleteLanguage = async (id) => {
    try {
      const response = await fetch("/api/global/language/deletelanguage", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        fetchLanguages();
        alert("LANGUAGES DELETED successfully!");
      }
    } catch (error) {
      console.error("Error deleting language:", error);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);
 
  // States for Departments
  const [department, setDepartment] = useState("");
  const [departmentsList, setDepartmentsList] = useState([]);
  const [editDepartmentId, setEditDepartmentId] = useState(null);
  const [editDepartmentValue, setEditDepartmentValue] = useState("");

  // Fetch departments
  const fetchDepartments = async () => {
    const res = await fetch("/api/global/department/getdepartment");
    const data = await res.json();
    setDepartmentsList(data);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleSubmitDepartment = async (e) => {
    e.preventDefault();
    if (!department.trim()) return;

    const res = await fetch("/api/global/department/adddepartment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: department }),
    });

    if (res.ok) {
      fetchDepartments();
      setDepartment("");
    }
  };

  const toggleEditDepartment = (id) => {
    if (editDepartmentId === id) {
      setEditDepartmentId(null);
      setEditDepartmentValue("");
    } else {
      setEditDepartmentId(id);
      const departmentToEdit = departmentsList.find((item) => item._id === id);
      setEditDepartmentValue(departmentToEdit.name);
    }
  };

  const saveEditDepartment = async (id) => {
    const res = await fetch("/api/global/department/editdepartment", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name: editDepartmentValue }),
    });

    if (res.ok) {
      fetchDepartments(); // Refresh list
      setEditDepartmentId(null); // Reset edit mode
      setEditDepartmentValue(""); // Reset input
    }
  };

  const handleDeleteDepartment = async (id) => {
    const res = await fetch("/api/global/department/deletedepartment", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      fetchDepartments(); // Refresh list
    }
  };
// services is here--->

const [service, setService] = useState("");
const [servicesList, setServicesList] = useState([]);
const [editServiceId, setEditServiceId] = useState(null);
const [editServiceValue, setEditServiceValue] = useState("");

// Fetch services on mount
useEffect(() => {
  const loadServices = async () => {
    const response = await fetch("/api/global/service");
    const data = await response.json();
    if (data.success) {
      setServicesList(data.data);
    }
  };
  loadServices();
}, []);

// Add Service
const handleSubmitService = async (e) => {
  e.preventDefault();
  if (!service.trim()) return;

  const response = await fetch("/api/global/service", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: service.trim() }),
  });

  const data = await response.json();
  if (data.success) {
    setServicesList([...servicesList, data.data]);
    setService("");
    alert("services added ");
  }
};

// Toggle Edit Mode
const toggleEditService = (id) => {
  if (editServiceId === id) {
    setEditServiceId(null);
    setEditServiceValue("");
  } else {
    setEditServiceId(id);
    const serviceItem = servicesList.find((item) => item._id === id);
    setEditServiceValue(serviceItem.name);
  }
};

// Save Edited Service
const saveEditService = async (id) => {
  const response = await fetch("/api/global/service", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name: editServiceValue }),
  });

  const data = await response.json();
  if (data.success) {
    setServicesList(
      servicesList.map((item) =>
        item._id === id ? { ...item, name: editServiceValue } : item
      )
    );
    setEditServiceId(null);
    setEditServiceValue("");
  }
};

// Delete Service
const handleDeleteService = async (id) => {
  const response = await fetch("/api/global/service", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await response.json();
  if (data.success) {
    setServicesList(servicesList.filter((item) => item._id !== id));
  }
};

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded">
        {/* This is a industry section */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md   bg-white border-l-2 border-teal-600">
          <div>
            <form
              onSubmit={handleSubmitIndustry}
              className="flex items-end gap-3"
            >
              <div className="grow flex flex-col">
                <label htmlFor="industry" className="mb-2 pl-2 font-semibold">
                  Industries
                </label>
                <input
                  id="industry"
                  value={industry}
                  onChange={handleIndustryChange}
                  placeholder="Enter Industry"
                  className="border  rounded-md px-2 h-8"
                />
              </div>
              <button type="submit" className="text-xl cursor-pointer">
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </form>

            {/* Display Industries */}
            <div className="mt-3  max-h-[300px] overflow-y-auto p-3">
              {industriesList.map((item, index) => (
                <div key={item._id} className="flex justify-between  mt-2">
                  <p>
                    {editIndustryId === item._id ? (
                      <input
                        className="border  rounded-md h-8 px-2"
                        value={editIndustryValue}
                        onChange={(e) => setEditIndustryValue(e.target.value)}
                      />
                    ) : (
                      <span>
                        {index + 1}. {item.name}
                      </span>
                    )}
                  </p>

                  <div className="flex gap-2">
                    {editIndustryId === item._id ? (
                      <button onClick={() => saveEditIndustry(item._id)}>
                        <FontAwesomeIcon
                          icon={faSave}
                          className="text-green-600"
                        />
                      </button>
                    ) : (
                      <button onClick={() => toggleEditIndustry(item._id)}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-blue-600"
                        />
                      </button>
                    )}
                    <button onClick={() => handleDeleteIndustry(item._id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-600"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* tools and software section */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form onSubmit={handleSubmitTool} className="flex items-end gap-2">
            <div className=" grow flex flex-col">
              <label htmlFor="tools" className="mb-2 pl-2 font-semibold">
                Tools & Software
              </label>
              <input
                id="tools"
                className="border rounded-md h-8 px-2"
                value={tool}
                onChange={handleToolChange}
                placeholder="Add Tool"
              />
            </div>
            <button type="submit" className=" rounded-md  text-xl ">
              <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </form>

          <div className=" max-h-[300px] overflow-y-auto p-3">
            {toolsList.map((item, index) => (
              <div key={item._id} className="even:bg-slate-50 ">
                <div className="flex justify-between px-1">
                  <p className="capitalize truncate flex gap-2 leading-8 text-[14px]">
                    <span>{index + 1}.</span>
                    {editToolId === item._id ? (
                      <input
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                        value={editToolValue}
                        onChange={(e) => setEditToolValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editToolId === item._id ? (
                      <span className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => toggleEditTool(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                        {editToolValue && (
                          <FontAwesomeIcon
                            icon={faSave}
                            onClick={() => saveEditTool(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                        )}
                      </span>
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditTool(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteTool(item._id)}
                      className="mt-1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* This is a Topic section */}

        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form
            onSubmit={handleSubmitTopic}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                Topics
              </label>
              <input
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                type="text"
                name="topic"
                placeholder="Enter Topic"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          {/* Display Topics */}
          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {topicsList.length > 0 ? (
              topicsList.map((item, index) => (
                <div key={item._id} className="even:bg-slate-50">
                  <div className="flex justify-between px-1">
                    <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                      <span>{index + 1}.</span>
                      {editTopicId === item._id ? (
                        <input
                          className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                          value={editTopicValue}
                          onChange={(e) => setEditTopicValue(e.target.value)}
                        />
                      ) : (
                        item.name
                      )}
                    </p>
                    <div className="flex gap-2">
                      {editTopicId === item._id ? (
                        <span className="flex gap-2">
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditTopic(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                          {editTopicValue && (
                            <FontAwesomeIcon
                              icon={faSave}
                              onClick={() => saveEditTopic(item._id)}
                              className="mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditTopic(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteTopic(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No topics found</div>
            )}
          </div>
        </div>

        {/* This is a langauges section */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form
            onSubmit={handleAddLanguage}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label
                htmlFor="language"
                className="mb-2 pl-2 text-para font-semibold"
              >
                Languages
              </label>
              <input
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                type="text"
                name="language"
                placeholder="Enter Language"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {languagesList.map((item, index) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                    <span>{index + 1}.</span>
                    {editLanguageId === item._id ? (
                      <input
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                        value={editLanguageValue}
                        onChange={(e) => setEditLanguageValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editLanguageId === item._id ? (
                      <span className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => setEditLanguageId(null)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                        {editLanguageValue && (
                          <FontAwesomeIcon
                            icon={faSave}
                            onClick={() => handleEditLanguage(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                        )}
                      </span>
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => {
                          setEditLanguageId(item._id);
                          setEditLanguageValue(item.name);
                        }}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteLanguage(item._id)}
                      className="mt-1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*deparment is here */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
            <form
              onSubmit={handleSubmitDepartment}
              className="flex items-end justify-between gap-3"
            >
              <div className="grow flex flex-col">
                <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                  Department
                </label>
                <input
                  onChange={handleDepartmentChange}
                  value={department}
                  className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                  type="text"
                  name="department"
                  placeholder="Enter Department"
                />
              </div>
              <button type="submit">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-xl hover:text-primary cursor-pointer mb-1"
                />
              </button>
            </form>

            {/* Display Departments */}
            <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
              {departmentsList.map((item, index) => (
                <div key={item._id} className="even:bg-slate-50">
                  <div className="flex justify-between px-1">
                    <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                      <span>{index + 1}.</span>
                      {editDepartmentId === item._id ? (
                        <input
                          className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                          value={editDepartmentValue}
                          onChange={(e) =>
                            setEditDepartmentValue(e.target.value)
                          }
                        />
                      ) : (
                        item.name // Display the department name
                      )}
                    </p>
                    <div className="flex gap-2">
                      {editDepartmentId === item._id ? (
                        <span className="flex gap-2">
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditDepartment(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                          {editDepartmentValue && (
                            <FontAwesomeIcon
                              icon={faSave}
                              onClick={() => saveEditDepartment(item._id)}
                              className="mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditDepartment(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteDepartment(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*services is here */}
          <div className=" shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
            <form
              onSubmit={handleSubmitService}
              className="flex items-end gap-3 mb-4"
            >
              <div className="flex flex-col flex-grow">
                <label htmlFor="service" className="mb-2 font-semibold">
                  Service
                </label>
                <input
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="border rounded-md h-8 px-2 w-full"
                  placeholder="Enter Service"
                />
              </div>
              <button type="submit" className="text-xl">
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </form>

            <div className="border overflow-y-scroll p-3 h-60 rounded-md">
              {servicesList.length > 0 ? (
                servicesList.map((item, index) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="flex-grow">
                      <span className="mr-2">{index + 1}.</span>
                      {editServiceId === item._id ? (
                        <input
                          value={editServiceValue}
                          onChange={(e) => setEditServiceValue(e.target.value)}
                          className="border rounded-md px-2 h-8 w-full"
                        />
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {editServiceId === item._id ? (
                        <>
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="cursor-pointer"
                            onClick={() => toggleEditService(item._id)}
                          />
                          <FontAwesomeIcon
                            icon={faSave}
                            className="cursor-pointer"
                            onClick={() => saveEditService(item._id)}
                          />
                        </>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="cursor-pointer"
                          onClick={() => toggleEditService(item._id)}
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="cursor-pointer"
                        onClick={() => handleDeleteService(item._id)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No services added yet.</p>
              )}
            </div>
          </div>

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
