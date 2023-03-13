import React, { Component } from "react";

import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
      <footer className="bg-tertiary rounded-2xl">
        <div className="col-md-12">
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
            <a
              className="linkedin-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/catherineonia"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default SectionWrapper(Footer, "");
