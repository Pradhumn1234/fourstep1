// // src/components/RichTextEditor.jsx
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import TextAlign from '@tiptap/extension-text-align';
// import Heading from '@tiptap/extension-heading';
// import Image from '@tiptap/extension-image';
// import BulletList from '@tiptap/extension-bullet-list';
// import OrderedList from '@tiptap/extension-ordered-list';
// import ImageResize from 'tiptap-extension-resize-image';
// import { Link } from '@tiptap/extension-link';
// import Video from './video'; // Import the custom video extension
// import ToolBar from './ToolBar';
// export default function RichTextEditor({ content, onContentChange, setFilename, filename }) {
//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure(),
//       TextAlign.configure({
//         types: ['heading', 'paragraph'],
//       }),
//       Heading.configure({
//         levels: [1, 2, 3],
//       }),
//       OrderedList.configure({
//         HTMLAttributes: {
//           class: 'list-decimal ml-3',
//         },
//       }),
//       BulletList.configure({
//         HTMLAttributes: {
//           class: 'list-disc ml-3',
//         },
//       }),
//       Link,
//       Image,
//       ImageResize,
//       Video, // Add the custom video extension here
//     ],
//     content: content,
//     editorProps: {
//       attributes: {
//         class: 'min-h-[156px] border rounded-md bg-slate-50 py-2 px-3',
//       },
//     },
//     onUpdate: ({ editor }) => {
//       onContentChange(editor.getHTML());
//     },
//   });

//   return (
//     <div>
//       <ToolBar editor={editor} setFilename={setFilename} filename={filename} />
//       <div className="editor-content">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// }

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import ToolBar from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ImageResize from "tiptap-extension-resize-image";
import { Link } from '@tiptap/extension-link';
import { useEffect } from "react";
import Video from './video';

export default function RichTextEditor({
  content,
  onContentChange,
  setFilename,
  filename,
}) {

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-3",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-3",
        },
      }),
      Link,
      Image,
      ImageResize,
      Video, // Add the custom video extension here
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md focus:border-primary outline-none py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML());
      onContentChange(editor.getHTML());
    },
  });
  // console.log("content is here-----> ",content);
  useEffect(() => {
    if (editor&&content) {
     
      editor.commands.setContent(content); // Set the HTML content
    }
  }, [editor,content]);

  return (
    <div>
      <ToolBar editor={editor} setFilename={setFilename} filename={filename} />
      <div className="editor-content">
      <EditorContent editor={editor} />
      </div>
    </div>
  );
}

