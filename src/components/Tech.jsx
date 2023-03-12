import React from "react";

import { LogoShield } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='w-full flex flex-row flex-wrap justify-evenly'>
      {technologies.map((technology) => (
        <div className='w-10 h-10' key={technology.name} >
          <LogoShield icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

