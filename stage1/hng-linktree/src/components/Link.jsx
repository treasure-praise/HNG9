import React from "react";

const Link = ({ text, link }) => {
  return (
    // <a href={link} className="w-full  bg-[#EAECF0] rounded-md">
    //   <div className="w-full border bg-[#EAECF0] rounded-md">
    //     <h1 className="py-6">{text}</h1>
    //   </div>
    // </a>

    <div className="w-full border bg-[#EAECF0] rounded-md my-6">
      <a href={link} className="w-full  bg-[#EAECF0] rounded-md">
        <h1 className="py-6">{text}</h1>
      </a>
    </div>
  );
};

export default Link;
