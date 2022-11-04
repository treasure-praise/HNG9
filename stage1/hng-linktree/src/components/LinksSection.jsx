import React from "react";
import NavLink from "./NavLink";
import links from "../data.js";

const LinksSection = () => {
  return (
    <section className="px-8 text-center">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            text={link.text}
            link={link.link}
            id={link.id}
            routerLink={link.routerLink}
          />
        );
      })}
    </section>
  );
};

export default LinksSection;
