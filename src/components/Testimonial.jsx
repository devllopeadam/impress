import { Stars } from "../assets";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const Testimonial = ({ image, name, logoCompany }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex items-center max-sm:flex-col gap-10 lg:gap-16">
      <img
        src={image}
        className="lg:w-[260px] w-[240px] rounded-radius"
      />
      <div className="flex flex-col items-start gap-4">
        <img
          src={Stars}
          className="w-[100px]"
        />
        <h3 className="text-2xl font-semibold text-white leading-[1.2]">
          Impress has revolutionized how we collaborate on projects. Its
          intuitive interface and powerful features have made creating content a
          breeze. Highly recommended!
        </h3>
        <p className="text-white font-normal">
          <span className="font-bold">{name}</span>, Managing Director &
          Founder, Logoipsum
        </p>
        <img
          src={logoCompany}
          className="h-6"
        />
      </div>
    </motion.div>
  );
};

export default Testimonial;
