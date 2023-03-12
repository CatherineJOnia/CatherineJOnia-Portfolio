import React, { Suspense } from "react";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import CanvasLoader from "../Loader";

const LogoShield = ({ name, icon, source_code_link }) => {

  return (
    <Suspense fallback={<CanvasLoader />}>
      <Tilt className='xs:w-[100px] w-60'>
        <motion.div
        whileHover={{ scale: 1.2 }}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col cursor-pointer'
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {name}
            </h3>
          </div>
      </motion.div>
    </Tilt>
  </Suspense>
  );
};

export default LogoShield;
