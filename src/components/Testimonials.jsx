import React from "react";
import { motion } from "framer-motion";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

const TestimonialCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[700px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[30x]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <Swiper
       effect={"coverflow"}
       grabCursor={true}
       slidesPerView={"auto"}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
      navigation
      pagination={{ dynamicBullets: true, clickable: true }}
      loop={true}
      modules={[Pagination, Navigation, EffectCoverflow]}
      className={`bg-tertiary pb-10 ${styles.paddingX}`}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial">
          <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Testimonials, "");
