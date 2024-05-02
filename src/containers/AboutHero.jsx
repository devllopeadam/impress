import { motion } from "framer-motion";
import { variants } from "../constants";
import { AboutHeroImage } from "../assets";
const AboutHero = () => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-8">
        <div className="flex flex-col gap-6 mx-auto max-w-[800px]">
          <h1 className="max-sm:text-[32px] text-[56px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            About Our Journey
          </h1>
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            {`Welcome to Impress! We're a passionate team dedicated to
            revolutionizing the way you create content. Learn more about our
            journey, values, and mission below.`}
          </p>
        </div>
        <div className="rounded-radius overflow-hidden">
          <img
            src={AboutHeroImage}
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
