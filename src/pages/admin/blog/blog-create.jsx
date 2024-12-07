// import React, { useState, useRef, useMemo } from 'react';
// import dynamic from 'next/dynamic';
// import "../../../app/globals.css";
// import Layout from '@/components/admin/Layout';
// import { AppProvider } from '@/components/admin/context/Package/AddGuest';

// // Dynamically import JoditEditor with SSR disabled
// const JoditEditor = dynamic(() => import('jodit-react'), {
//   ssr: false,
// });

// const AdminBlogPanel = () => {
//   const editor = useRef(null);
//   const [content, setContent] = useState('');
//   const [title, setTitle] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [seoTitle, setSeoTitle] = useState('');
//   const [seoDescription, setSeoDescription] = useState('');
//   const [seoKeywords, setSeoKeywords] = useState('');

//   const categories = ['Tech', 'Lifestyle', 'Travel','hello','value','asd','asd','ad'];

//   const handleTagChange = (event) => {
//     setTags(event.target.value.split(',').map(tag => tag.trim()));
//   };

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(c => c !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const blogData = {
//       title,
//       content,
//       categories: selectedCategories,
//       tags,
//       seoTitle,
//       seoDescription,
//       seoKeywords,
//     };
//     // console.log('Blog Data:', blogData);

//     try {
//       const response = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(blogData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log('Blog successfully created:', result);
//       // You can add more actions here, e.g., redirecting the user to another page
//     } catch (error) {
//       console.error('Failed to create blog:', error);
//     }
//   };

//   const config = useMemo(() => ({
//     readonly: false,
//     placeholder: 'Start typing...',
//     toolbar: true,
//     height: 600,
//     buttons: [
//       'bold',
//       'italic',
//       'underline',
//       'strikethrough',
//       'eraser',
//       'ul',
//       'ol',
//       'outdent',
//       'indent',
//       'font',
//       'fontsize',
//       'brush',
//       'paragraph',
//       'image',
//       'link',
//       'align',
//       'undo',
//       'redo',
//       'table',
//     ],
//   }), []);

//   return (
//     <AppProvider>
//     <Layout>
//       <form onSubmit={handleSubmit}>
//         <div className='flex justify-between items-center border-b border-slate-50 mb-5'>
//           <div>
//             <h2>Post</h2>
//           </div>

//           <div className='flex gap-3 justify-end mb-2'>
//             <button type="button" className='border border-primary/80 hover:bg-primary hover:text-white text-primary px-4 py-1 rounded'>Draft</button>
//             <button type="submit" className='bg-navyblack/80 hover:bg-navyblack text-white px-4 py-1 rounded'>Publish</button>
//           </div>
//         </div>
//         <div className='md:flex gap-5 '>
//           <div className='grow'>
//             <div>
//               <label className='text-sm font-semibold text-black/60'>Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 className='border w-full rounded-md h-8 px-2 text-sm grow focus:border-black/60 font-sans outline-none'
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label className='text-sm font-semibold text-black/60'>Content</label>
//               {typeof window !== 'undefined' && (
//                 <JoditEditor
//                   ref={editor}
//                   value={content}
//                   config={config}
//                   className=''
//                   tabIndex={1}
//                   onBlur={(newContent) => setContent(newContent)}
//                   onChange={() => {}}
//                 />
//               )}
//             </div>
//           </div>
//           <div className='min-w-[230px] mt-6'>
//             <div className='flex flex-col gap-2 items-start bg-white rounded px-2'>
//               <label className='text-sm font-semibold text-black/60 border-b'>Categories</label>
//               <div className=' h-32 overflow-y-auto w-full'>
//                 {categories.map((category) => (
//                   <label key={category} className='flex items-center cursor-pointer w-full'>
//                     <input
//                       type="checkbox"
//                       value={category}
//                       checked={selectedCategories.includes(category)}
//                       onChange={handleCategoryChange}
//                       className='mr-2 accent-slate-700'
//                     />
//                     {category}
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <div>
//                 <label className='text-sm font-semibold text-black/60'>Tags (comma separated)</label>
//               </div>
//               <input
//                 type="text"
//                 value={tags.join(', ')}
//                 onChange={handleTagChange}
//                 className='border w-full text-sm rounded-md h-8 px-2 grow focus:border-black/60 font-sans outline-none'
//               />
//             </div>

//             <div>
//               <div>
//                 <label className='text-sm font-semibold text-black/60'>SEO Title</label>
//               </div>
//               <input
//                 type="text"
//                 value={seoTitle}
//                 onChange={(e) => setSeoTitle(e.target.value)}
//                 className='border w-full text-sm rounded-md h-8 px-2 grow focus:border-black/60 font-sans outline-none'
//               />
//             </div>
//             <div>
//               <div>
//                 <label className='text-sm font-semibold text-black/60'>SEO Description</label>
//               </div>
//               <textarea
//                 value={seoDescription}
//                 onChange={(e) => setSeoDescription(e.target.value)}
//                 className='border w-full text-sm rounded-md resize-none h-32 p-2 grow focus:border-black/60 font-sans outline-none'
//               />
//             </div>
//             <div>
//               <div>
//                 <label className='text-sm font-semibold text-black/60'>SEO Keywords (comma separated)</label>
//               </div>
//               <input
//                 type="text"
//                 value={seoKeywords}
//                 onChange={(e) => setSeoKeywords(e.target.value)}
//                 className='border w-full text-sm rounded-md h-8 px-2 grow focus:border-black/60 font-sans outline-none'
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//     </Layout>
//     </AppProvider>
//   );
// };

// export default AdminBlogPanel;




// import { AppProvider } from "@/components/admin/context/Package/AddGuest";
// import Layout from "@/components/admin/Layout";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
// import BlogDetailSeo from "@/components/admin/blog/Blog Detail/BlogDetailSeo";
// import BlogDetailBanner from "@/components/admin/blog/Blog Detail/BlogDetailBanner";
// import DetailsQuestion from "@/components/admin/blog/Blog Detail/DetailsQuestion";

// export default function AdminBlogPanel() {
// const [selectType,setSelectType]=useState("");
// const [blogItinery,setBlogItinery]=useState({});
//   return (
//     <AppProvider>
//       <Layout>
//         <div className="flex items-center gap-5 text-primary xl:mt-5 mb-7">
//           <FontAwesomeIcon icon={faCube} className="text-2xl" />
//           <p className="md:text-[28px] text-xl text-black">Create Blog Post</p>
//           <FontAwesomeIcon
//             icon={faArrowRightLong}
//             className=" text-teal-700 text-xl"
//           />
//         </div>
//         <div className="my-5 flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
//           <label htmlFor="postTypes"
//             className="font-semibold text-para md:text-base">
//             Select Post Types :
//           </label>
//           <select
//             id="postTypes"
//             onChange={(e)=>setSelectType(e.target.value)}
//             className="mt-1 md:ml-2 h-8  md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
//           >
//             <option>Select Type</option>
//             <option value="blog">Blog</option>
//             <option value="guide">Travel Guide</option>
//             <option value="news">News</option>
//           </select>
//         </div>
//         <div>
//           <BlogDetailBanner selectType={selectType} setBlogItinery={setBlogItinery} />
//           <DetailsQuestion/>
//         </div>
//         <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5 rounded mt-5">
//          <BlogDetailSeo />
//         </div>
//       </Layout>
//     </AppProvider>
//   );
// }




import { useState } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import BlogDetailBanner from "@/Component/admin/Blog Detail/BlogDetailBanner";

export default function CreateWebinar() {
  const [blogData, setBlogData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1")
  return (
    
        <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Webinar</p>
      </div>
      <div className="border-b border-slate-300 mb-5">
        <div className="flex gap-2 text-[14px] pt-3 pb-2 flex-wrap">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`${
              activeTab === "Tab1"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Basic Information
          </button>
        </div>
      </div>

      {/* Render each tab's content conditionally */}
      <div
        className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
      >
        <BlogDetailBanner setActiveTab={setActiveTab} blogData={blogData} />
      </div>
      </AdminLayout>
     
    
  );
}

