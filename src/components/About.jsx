import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
        My name is Catherine and I'm a Full Stack Software Engineer. &nbsp; I'm both familiar and practiced with developing web-based applications using the PERN stack (PostgreSQL, Express.js, React, and Node.js) with JavaScript as my main language. &nbsp; I'm a life-long self-motivated learner and I'm always working on a new project that both challenges and reinforces my understanding of my tech stack.
        <br />
        <br />
        My quest as a developer is to code a travel application that will make travel planning both collaborative and organized. &nbsp; When I'm not coding, you can find me working on a problem at the climbing gym, attempting to bake the perfect olive oil cake, or planning for my next international trip!

        {/* &nbsp; I'm pivoting from a unique background in Dental Hygiene where I honed skills such as Time Management, a Keen Eye for Detail, and Effective Communication, which are skills that I believe any developement team would find valuable. */}
        {/* &nbsp; I'm excited to launch into a new career that challenges me to grow, not only as an individual, but as a professional as well. &nbsp; I'm interested in joining an engineering team that is passionate about the product they work on and will offer me opportunities to solve interesting problems while leveraging my passion for gaming, travel, and food. &nbsp; I would love to work with a team that encourages mentorship, growth, positivity, and a healthy work-life balance. */}
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
