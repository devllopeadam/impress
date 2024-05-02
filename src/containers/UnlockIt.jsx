import { motion } from "framer-motion";
import { ArrowRight } from "../assets";
import { YellowButton } from "../components/";
import { variants } from "../constants";

const UnlockIt = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container bg-dark-primary py-[128px] px-8 rounded-radius flex flex-col items-center gap-10">
      <h1 className="max-w-[700px] mx-auto text-center text-[32px] text-white font-semibold leading-[1.2] tracking-tighter sm:text-[44px]">
        Unlock the power of seamless design solutions now.
      </h1>
      <YellowButton
        text={"Get started"}
        href={"/pricing"}>
        <img
          src={ArrowRight}
          loading="lazy"
        />
      </YellowButton>
    </motion.div>
  );
};

export default UnlockIt;
