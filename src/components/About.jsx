import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        My name is Catherine and I'm a Full Stack Software Engineer. &nbsp; I'm both practiced and familiar with developing web-based applications using the PERN stack (PostgreSQL, Express.js, React, and Node.js) with JavaScript as my main language. &nbsp; I'm a life-long self-motivated learner and I'm always working on a new project that both challenges and reinforces my understanding of my tech stack. &nbsp; I'm pivoting from a unique background in Dental Hygiene where I honed skills such as Time Management, a Keen Eye for Detail, and Effective Communication, which are skills that I believe any developement team would find valuable. &nbsp; I'm excited to launch into a new career that challenges me to grow, not only as an individual, but as a professional as well. &nbsp; I'm interested in joining an engineering team that is passionate about the product they work on and will offer me opportunities to solve interesting problems while leveraging my passion for gaming, travel, and food. &nbsp; I would love to work with a team that encourages mentorship, growth, positivity, and a healthy work-life balance.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
