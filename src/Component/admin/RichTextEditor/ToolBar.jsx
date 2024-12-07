// // src/components/ToolBar.jsx
// "use client";
// import { List, Heading1, Heading2, Heading3, Code, Bold, Italic, Strikethrough, AlignCenter, AlignLeft, AlignRight, Highlighter, Upload, Link as LinkIcon, Music, Video as VideoIcon } from "lucide-react"; // Add Music and Video icons
// import { Toggle } from "./toggle";
// import { ListOrdered } from "lucide-react";

// export default function ToolBar({ editor, setFilename, filename }) {
//   if (!editor) return null;

//   // Function to handle image upload
//   const addImage = () => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.onchange = async (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const formData = new FormData();
//         formData.append("file", file);
//         const data = await fetch("/api/upload-image", {
//           method: "POST",
//           body: formData,
//         });
//         const resdata = await data.json();
//         if (data?.ok) {
//           const pathArr = resdata?.url?.split("/");
//           const path = pathArr[pathArr?.length - 1];
//           setFilename([...filename, path]);
//           editor.chain().focus().setImage({ src: resdata?.url }).run();
//         }
//       }
//     };
//     input.click();
//   };

//   // Function to insert a link
//   const addLink = () => {
//     const url = prompt("Enter the URL for the link:");
//     if (url) {
//       const selection = editor.state.selection;
//       if (selection && selection.empty === false) {
//         editor.chain().focus().setLink({ href: url }).run();
//       } else {
//         alert("Please select text to add a link.");
//       }
//     }
//   };

//   // Function to insert video
//   const addVideo = () => {
//     const url = prompt("Enter the video URL:");
//     console.log("url of video ----> ",url)
//     if (url) {
//       editor.chain().focus()?.setVideo(url).run();  // This will use the custom setVideo command
//     }
//   };

//   // Tool options
//   const Options = [
//     {
//       icon: <Heading1 className="size-4" />,
//       onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
//       pressed: editor.isActive("heading", { level: 1 }),
//     },
//     {
//       icon: <Heading2 className="size-4" />,
//       onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
//       pressed: editor.isActive("heading", { level: 2 }),
//     },
//     {
//       icon: <Heading3 className="size-4" />,
//       onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
//       pressed: editor.isActive("heading", { level: 3 }),
//     },
//     {
//       icon: <Bold className="size-4" />,
//       onClick: () => editor.chain().focus().toggleBold().run(),
//       pressed: editor.isActive("bold"),
//     },
//     {
//       icon: <Italic className="size-4" />,
//       onClick: () => editor.chain().focus().toggleItalic().run(),
//       pressed: editor.isActive("italic"),
//     },
//     {
//       icon: <Strikethrough className="size-4" />,
//       onClick: () => editor.chain().focus().toggleStrike().run(),
//       pressed: editor.isActive("strike"),
//     },
//     {
//       icon: <AlignLeft className="size-4" />,
//       onClick: () => editor.chain().focus().setTextAlign("left").run(),
//       pressed: editor.isActive({ textAlign: "left" }),
//     },
//     {
//       icon: <AlignCenter className="size-4" />,
//       onClick: () => editor.chain().focus().setTextAlign("center").run(),
//       pressed: editor.isActive({ textAlign: "center" }),
//     },
//     {
//       icon: <AlignRight className="size-4" />,
//       onClick: () => editor.chain().focus().setTextAlign("right").run(),
//       pressed: editor.isActive({ textAlign: "right" }),
//     },
//     {
//       icon: <List className="size-4" />,
//       onClick: () => editor.chain().focus().toggleBulletList().run(),
//       pressed: editor.isActive("bulletList"),
//     },
//     {
//       icon: <ListOrdered className="size-4" />,
//       onClick: () => editor.chain().focus().toggleOrderedList().run(),
//       pressed: editor.isActive("orderedList"),
//     },
//     {
//       icon: <LinkIcon className="size-4" />,
//       onClick: () => addLink(),
//       pressed: editor.isActive("link"),
//     },
//     {
//       icon: <Upload className="size-4" />,
//       onClick: () => addImage(),
//       pressed: editor.isActive("image"),
//     },
//     {
//       icon: <VideoIcon className="size-4" />, 
//       onClick: () => addVideo(), 
//       pressed: editor.isActive("video"),
//     },
    
//   ];

//   return (
//     <div className="border rounded-md p-1.5 mb-1 bg-slate-50 space-x-1 sticky top-10 z-50">
//       {Options.map((option, i) => (
//         <Toggle
//           key={i}
//           size="sm"
//           pressed={option.pressed}
//           onPressedChange={option.onClick}
//         >
//           {option.icon}
//         </Toggle>
//       ))}
//     </div>
//   );
// }

"use client";
import { List, Heading1, Heading2, Heading3, Bold, Italic,Video as VideoIcon , Strikethrough, AlignCenter, AlignLeft, AlignRight, Highlighter, Upload, Link as LinkIcon } from "lucide-react";
import { Toggle } from "./toggle";
import { ListOrdered } from "lucide-react";
export default function ToolBar({ editor, setFilename, filename }) {
  if (!editor) return null;
  // Function to handle image upload (unchanged)
  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const data = await fetch("/api/blog/blogimages/upload-image", {
          method: "POST",
          body: formData,
        });
        const resdata = await data.json();
        if (data?.ok) {
          const pathArr = resdata?.url?.split("/");
          const path = pathArr[pathArr?.length - 1];
          setFilename([...filename, path]);
          editor.chain().focus().setImage({ src: resdata?.url }).run();
        }
      }
    };
    input.click();
  };

  // Function to insert a link only behind selected text
const addLink = () => {
  const url = prompt("Enter the URL for the link:");
  if (url) {
    const selection = editor.state.selection;
    if (selection && selection.empty === false) {
      editor.chain().focus().setLink({ href: url }).run();
    } else {
      alert("Please select text to add a link.");
    }
  }
};
const addVideo = () => {
      const url = prompt("Enter the video URL:");
      // console.log("url of video ----> ",url)
      if (url) {
        editor.chain().focus()?.setVideo(url).run();  // This will use the custom setVideo command
      }
    };


  // Tool options
  const Options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },
    
    {
      icon: <LinkIcon className="size-4" />, // Link icon from lucide-react
      onClick: () => addLink(), // Insert link functionality
      pressed: editor.isActive("link"),
    },
    {
      icon: <Upload className="size-4" />,
      onClick: () => addImage(),
      pressed: editor.isActive("image"),
    },
    {
            icon: <VideoIcon className="size-4" />, 
            onClick: () => addVideo(), 
            pressed: editor.isActive("video"),
          },
  ];

  return (
    <div className="border rounded-md p-1.5 mb-1 bg-slate-50 space-x-1 sticky top-10 z-10">
      {Options.map((option, i) => (
        <Toggle
          key={i}
          size="sm"
          pressed={option.pressed}
          onPressedChange={option.onClick}
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
}
