import React, { Suspense } from "react";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import CanvasLoader from "../Loader";

const LogoShield = ({ icon }) => {

  return (
    <Suspense fallback={<CanvasLoader />}>
      <Tilt className='xs:w-[100px]'>
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
            className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
            />
          </div>
      </motion.div>
    </Tilt>
  </Suspense>
  );
};

export default LogoShield;
