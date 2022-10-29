import React from "react";

const Link = ({ text, link, id }) => {
  return (
    <div className="w-full border hover:bg-[#D0D5DD] bg-[#F4F5F7] rounded-md my-6">
      <a
        target="_blank"
        id={id}
        href={link}
        className="w-full  bg-[#EAECF0] rounded-md"
        rel="noreferrer"
      >
        <h1 className="py-6">{text}</h1>
      </a>
    </div>
  );
};

export default Link;
