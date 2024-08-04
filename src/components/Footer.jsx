import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
      <footer className="bg-tertiary rounded-2xl">
        <div className="mt-5 col-md-12">
          <SocialIcon
              url="https://linkedin.com/in/catherineonia"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/catherinejonia"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://medium.com/@catherinejonia"
              fgColor="white"
              bgColor="transparent"
            />
          <div className="download justify-center flex flex-wrap gap-10">
            <a
              className="download-button"
              rel="noopener noreferrer"
              target="_blank"
              href="/Catherine_Onia_Resume_2023.pdf"
              download
            >
              Download Resume
            </a>
          </div>
          <div className="justify-center flex flex-wrap gap-10 mb-7">
            <p className="font-normal text-center text-[15px] leading-[27px]">
              Copyright Ⓒ 2023 Catherine Onia. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

export default SectionWrapper(Footer, "");
