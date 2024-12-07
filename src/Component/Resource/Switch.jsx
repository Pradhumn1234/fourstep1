import React from "react";
import Link from "next/link";

const Switch = () => {
  const resources = [
    { href: "/resource/webinar", label: "Webinar" },
    { href: "/resource/product", label: "Product" },
    { href: "/resource/case-studies", label: "Case & studies" },
    { href: "/resource/demo-videos", label: "Demos & Videos" },
    { href: "/resource/blog", label: "Blog" },
  ];

  return (
    <div>
      <div className="flex items-center justify-center md:py-4">
        <div className="flex flex-wrap  gap-4 justify-center">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.href} className="btn_filter">
              {resource.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Switch;
