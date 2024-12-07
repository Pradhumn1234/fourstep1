// src/extensions/Video.js
import { Node } from '@tiptap/core';
function getYouTubeVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    if (matches && matches[1]) {
      return matches[1];
    }
    return null;
  }

const Video = Node.create({
  name: 'video',

  group: 'block',

  content: 'inline*',
  inline: false,
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'iframe[src^="https://www.youtube.com/embed/"]',
        getAttrs: (dom) => ({
          src: dom.getAttribute('src'),
        }),
      },
      {
        tag: 'video[src]',
        getAttrs: (dom) => ({
          src: dom.getAttribute('src'),
        }),
      },
    ];
  },

  renderHTML({ node }) {
    const { src } = node.attrs;

    // Check if it's a YouTube URL (You can add more conditions for other services like Vimeo)
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
        const videoId = getYouTubeVideoId(src); // Extract the video ID
      const secureSrc = `https://www.youtube.com/embed/${videoId}`; 
      return [
        'iframe',
        {
          src: secureSrc,
          frameborder: '0',
          allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: true,
          width: '80%',
          height: '400px',
          style: 'display: block; margin-left: auto; margin-right: auto;margin-top:8px;margin-bottom:8px;'
        },
      ];
    }

    // If it's not a YouTube link, render it as a <video> tag
    return [
      'video',
      {
        src: src,
        controls: true,
        width: '100%',
        height: 'auto',
      },
      0,
    ];
  },

  addCommands() {
    return {
      setVideo:
        (url) =>
        ({ chain }) => {
          return chain().insertContent({ type: this.name, attrs: { src: url } }).run();
        },
    };
  },
});

export default Video;
