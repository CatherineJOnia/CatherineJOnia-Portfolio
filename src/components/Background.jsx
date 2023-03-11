import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { backgrounds } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const BackgroundCard = ({ background }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={background.date}
      iconStyle={{ background: background.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={background.icon}
            alt={background.company_name}
            className='w-[90%] h-[90%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{background.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {background.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {background.points.map((point, index) => (
          <li
            key={`background-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Background = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where I come from
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Previous Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {backgrounds.map((background, index) => (
            <BackgroundCard
              key={`background-${index}`}
              background={background}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Background, "work");
