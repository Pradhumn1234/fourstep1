import React from "react";

const TechUse = () => {
  const members = [

    {
      img: "/image/ab.webp",
      title: "React.js",
    },
    {
      img: "/image/ab.webp",
      title: "Next.js",
    },
    {
      img: "/image/java.png",
      title: "Java",
    },
    {
      img: "/image/nodejs.png",
      title: "Node.js",
    },
    {
      img: "/image/ab.webp",
      title: "mongoDb",
    },
    {
      img: "/image/mysql.png",
      title: "MySql",
    },
    {
      img: "/image/wordpress.png",
      title: "wordpress",
    },
    {
      img: "/image/ab.webp",
      title: "Php",
    },
    {
      img: "/image/ab.webp",
      title: "Html ",
    },
    {
      img: "/image/css.jpg",
      title: "Css",
    },
    {
      img: "/image/javascript.jpg ",
      title: "Javascript",
    },
    {
      img: "/image/jquery.jpg",
      title: "Jquery",
    },
    {
      img: "/image/css.jpg",
      title: "Tailwind ",
    },
    {
      img: "/image/bootstrap.jpg",
      title: "Bootstrap",
    },
  ];

  return (
    <div className="container">
      <div className="relative z-10 text-center px-4">
        <p className=" text-xs sm:text-lg md:text-xl">What we can Do for you</p>
        <h2 className=" text-md sm:text-2xl md:text-3xl lg:text-4xl  font-bold mb-2">
          Technologies We Use For Web Development
        </h2>
      </div>

      <div className="p-6">
        {/* <div className="grid grid-cols-1  md:px-16   md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {members.map((member, i) => (
            <div
              key={i}
              className="w-64  max-w-72 max-h-96 bg-gray-100  rounded  overflow-hidden "
            >
              <div className="w-full h-3/5 p-4">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={member.img}
                  alt="Sample Image"
                />
              </div>
              <div className="w-full pb-1 px-3">
                <div className=" font-medium   text-md ">{member.title}</div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center md:px-16">
          {members.map((member, i) => (
            <div
              key={i}
              className="w-full max-w-xs bg-gray-100 rounded overflow-hidden"
            >
              <div className="w-full md:h-44 md:p-3 p-2">
                <img
                  className="w-full md:h-full h-1/2 rounded-md object-cover"
                  src={member.img}
                  alt="Sample Image"
                />
              </div>
              <div className="w-full pb-1 px-3">
                <div className=" text-sm md:text-md">{member.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechUse;
