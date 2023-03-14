import React from "react";

import { LogoShield } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-15 h-15'>
          <a
            key={technology.name}
            href={technology.source_link}
            target='_blank'
            rel='noreferrer'
          >
            <LogoShield icon={technology.icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

