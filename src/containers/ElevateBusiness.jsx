import { motion } from "framer-motion";
import { ArrowRight, Elevate } from "../assets";
import { YellowButton } from "../components";
import { variants } from "../constants";

const ElevateBusiness = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container">
      <div className="bg-dark-primary rounded-radius py-12 px-4 sm:py-16 sm:px-8">
        <div className="flex max-md:flex-col items-center gap-16 max-w-[1060px] mx-auto">
          <img
            src={Elevate}
            loading="lazy"
            className="w-[428px]"
          />
          <div className="flex items-start flex-col gap-6">
            <h1 className="text-white font-semibold tracking-tight leading-[1.2] max-sm:text-[32px] text-[44px]">
              Elevate your business with Impress
            </h1>
            <p className="text-white-secondary font-medium">
              The definitive Webflow template for SaaS companies, blending sleek
              design, seamless functionality, and powerful features to elevate
              your online presence instantly.
            </p>
            <YellowButton
              text={"Get started"}
              href={"/pricing"}>
              <img
                src={ArrowRight}
                loading="lazy"
              />
            </YellowButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ElevateBusiness;
