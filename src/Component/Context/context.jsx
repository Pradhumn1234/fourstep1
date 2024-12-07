import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext(null);
const fetchIndustries = async () => {
  const response = await fetch("/api/global/industries/getIndustries");
  const data = await response.json();
return data;
};
const fetchTools = async () => {
  const response = await fetch("/api/global/tools/toolsoftware");
  const data = await response.json();
   return data;
};

const fetchTopics = async () => {
    const response = await fetch("/api/global/topic/gettopic");
      const result = await response.json();
      return result;   
};
const fetchWebinarTypes = async () => {
  const res = await fetch("/api/webinar/webinartype/getwebinar");
  const data = await res.json();
  return data;
};

const fetchDepartments = async () => {
  const res = await fetch("/api/global/department/getdepartment");
  const data = await res.json();
  return data;
};
const fetchLanguage= async () => {
  const res = await fetch("/api/global/language/getlanguages");
  const data = await res.json();
  return data;
};
const fetchService= async () => {
  const res = await fetch("/api/global/service");
  const data = await res.json();
  return data;
};


const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [topic,setTopic]=useState([]);
  const [tool,setTool]=useState([]);
  const [industries,setIndustries]=useState([]);
  const [webinarType,setWebinarType]=useState([]);
  const [department,setDepartment]=useState([]);
  const [service,setService]=useState([]);
  const [langauge,setLanguage]=useState([]);
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/user/user");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
    
    fetchTopics().then(res=>{setTopic(res?.result||[])});

    fetchTools().then(res=>{setTool(res?.data||[])});

    fetchIndustries().then(res=>{setIndustries(res?.data||[])});
    fetchWebinarTypes().then(res=>{setWebinarType(res||[])});
    fetchDepartments().then(res=>{setDepartment(res||[])});
    fetchService().then(res=>{setService(res?.data||[])});
    fetchLanguage().then(res=>{setLanguage(res?.data||[])});

  }, []);

  const filterGlobalData={tool,industries,topic,webinarType,department,service,langauge};

  const contextFun = { users, setUsers,filterGlobalData,data,setData };

  return <Context.Provider value={contextFun}>{children}</Context.Provider>;
};
export default AppProvider;

export const useAppContext = () => {
  return useContext(Context);
};
