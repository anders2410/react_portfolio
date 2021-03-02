import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col p-10">
      <div className="flex justify-center text-2xl">
        <a className="hover:underline" href="mailto:andhk11@gmail.com">
          <strong>andhk11@gmail.com</strong>
        </a>
      </div>
      <div className="flex justify-center my-6">
        <SocialIcon
          url="https://www.linkedin.com/in/anders-holt-knudsen-0924b9175/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/anders2410"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.facebook.com/anders.h.knudsen.3/"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </footer>
  );
};

export default Footer;
