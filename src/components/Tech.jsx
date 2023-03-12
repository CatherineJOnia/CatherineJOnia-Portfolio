import React from "react";

import { LogoShield } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-20'>
      {technologies.map((technology) => (
        <div className='w-10 h-10' key={technology.name} >
          <LogoShield icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

