import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/priyanshusingh146/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>

      <a href="https://github.com/Priyanshusingh46" target="_blank">
        <BsGithub />
      </a>

      <a href="https://leetcode.com/priyanshusingh1877/" target="_blank">
        <SiLeetcode />
      </a>
      <a href="https://codeforces.com/profile/priyanshusing" target="_blank">
        <SiCodeforces />
      </a>
    </div>
  );
};

export default HeaderSocials;
