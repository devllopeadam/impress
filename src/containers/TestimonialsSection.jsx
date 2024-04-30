import { motion } from "framer-motion";
import { variants, testimonials } from "../constants";
import { ButtonLeft, ButtonRight } from "../assets";
import { useState } from "react";
import { Testimonial } from "../components";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col">
        <div className="flex mb-14 flex-col items-center justify-center max-w-[800px] gap-5 mx-auto">
          <div className="title flex items-center justify-center text-[12px] text-dark-secondary py-[6px] px-3 rounded-full">
            <p>Testimonials</p>
          </div>
          <h1 className="text-[45px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Clients loves us
          </h1>
        </div>
        <div className="md:py-16 md:px-8 py-8 px-4 bg-dark-primary rounded-radius">
          <div className="w-full max-w-[1060px] mx-auto sm:px-[50px] lg:px-[104px] h-auto relative">
            <img
              onClick={handlePrev}
              src={ButtonLeft}
              className="max-sm:hidden max-lg:w-12 max-md:h-12 absolute -left-[10px] lg:left-0 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-85 transition-opacity duration-300"
            />
            <img
              onClick={handleNext}
              src={ButtonRight}
              className="max-sm:hidden max-lg:w-12 max-md:h-12 absolute -right-[10px] lg:right-0 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-85 transition-opacity duration-300"
            />
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <Testimonial {...testimonials[currentTestimonial]} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
