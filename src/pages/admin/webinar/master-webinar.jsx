import { useState, useEffect } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCirclePlus,
  faTrash,
  faXmark,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

export default function Masterwebinar() {
  // States for Webinar Types
  const [webinarType, setWebinarType] = useState("");
  const [webinarTypesList, setWebinarTypesList] = useState([]);
  const [editWebinarId, setEditWebinarId] = useState(null);
  const [editWebinarValue, setEditWebinarValue] = useState("");

  // Fetch webinar types
  const fetchWebinarTypes = async () => {
    const res = await fetch("/api/webinar/webinartype/getwebinar");
    const data = await res.json();
    setWebinarTypesList(data);
  };

  useEffect(() => {
    fetchWebinarTypes();
  }, []);

  const handleSubmitWebinarType = async (e) => {
    e.preventDefault();
    if (!webinarType) return;

    const res = await fetch("/api/webinar/webinartype/postwebinar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: webinarType }),
    });

    if (res.ok) {
      fetchWebinarTypes(); // Refresh list
      setWebinarType(""); // Reset input
    }
  };

  const toggleEditWebinar = (id) => {
    if (editWebinarId === id) {
      setEditWebinarId(null);
      setEditWebinarValue("");
    } else {
      setEditWebinarId(id);
      const webinar = webinarTypesList.find((item) => item._id === id);
      setEditWebinarValue(webinar.name);
    }
  };

  const saveEditWebinar = async (id) => {
    const res = await fetch("/api/webinar/webinartype/editwebinar", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name: editWebinarValue }),
    });

    if (res.ok) {
      fetchWebinarTypes(); // Refresh list
      setEditWebinarId(null); // Reset edit mode
      setEditWebinarValue(""); // Reset input
    }
  };
  
  const handleDeleteWebinar = async (id) => {
    const res = await fetch("/api/webinar/webinartype/deletewebinar", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      fetchWebinarTypes(); // Refresh list
    }
  };

  
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center gap-5 text-primary py-5">
          <p className="md:text-[28px] text-xl text-black">Webinar Master</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded">
          {/* First Form - Webinar Types */}
          <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
            <form
              onSubmit={handleSubmitWebinarType}
              className="flex items-end justify-between gap-3"
            >
              <div className="grow flex flex-col">
                <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                  Webinar Type
                </label>
                <input
                  onChange={(e) => setWebinarType(e.target.value)}
                  value={webinarType}
                  className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                  type="text"
                  name="webinarType"
                  placeholder="Enter Webinar Type"
                />
              </div>
              <button type="submit">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-xl hover:text-primary cursor-pointer mb-1"
                />
              </button>
            </form>

            {/* Display Webinar Types */}
            <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
              {webinarTypesList.map((item, index) => (
                <div key={item._id} className="even:bg-slate-50">
                  <div className="flex justify-between px-1">
                    <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                      <span>{index + 1}.</span>
                      {editWebinarId === item._id ? (
                        <input
                          className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                          value={editWebinarValue}
                          onChange={(e) => setEditWebinarValue(e.target.value)}
                        />
                      ) : (
                        item.name // Updated to display the correct property
                      )}
                    </p>
                    <div className="flex gap-2">
                      {editWebinarId === item._id ? (
                        <span className="flex gap-2">
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditWebinar(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                          {editWebinarValue && (
                            <FontAwesomeIcon
                              icon={faSave}
                              onClick={() => saveEditWebinar(item._id)}
                              className="mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditWebinar(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteWebinar(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
