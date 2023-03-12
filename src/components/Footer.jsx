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
              href="https://docs.google.com/document/d/1AHApDuNpvgUAXQrxjDC1eJMMlGUWzUEV/edit?usp=sharing&ouid=115668343253212061474&rtpof=true&sd=true"
            >
              Download Updated Resume
            </a>
            <a
              className="linkedin-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/catherineonia"
            >
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default SectionWrapper(Footer, "");
