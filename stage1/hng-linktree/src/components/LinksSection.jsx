import React from "react";
import Link from "./Link";
import links from "../data.js";

const LinksSection = () => {
  return (
    <section className="px-8">
      {links.map((link) => {
        return <Link text={link.text} link={link.link} />;
      })}
    </section>
  );
};

export default LinksSection;
