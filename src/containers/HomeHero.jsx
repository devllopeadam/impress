import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  HomeHeroImg,
  HomeHeroMobImg,
} from "../assets";
import { Link } from "react-router-dom";
import { YellowButton, WhiteButton } from "../components";
import { logos, variants } from "../constants";

const HomeHero = () => {
  return (
    <div className="bg-dark-primary rounded-radius py-12 px-8">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-5 max-w-[800px]">
          <Link
            to={"/blog"}
            className="flex items-center gap-1 bg-white rounded-full py-1 px-3 hover:opacity-85 transition-opacity duration-300">
            <p>🚀</p>
            <p className="text-[12px] text-dark-secondary hover:text-dark-primary">
              Check out the latest update
            </p>
            <img
              src={ChevronRight}
              loading="lazy"
            />
          </Link>
          <h1 className="text-white max-sm:text-[32px] text-[40px] sm:text-[56px] font-bold tracking-tighter">
            Unlock the power of seamless design solutions
          </h1>
          <p className="text-white-secondary font-medium max-w-[550px]">
            The definitive Webflow template for SaaS companies, blending sleek
            design, seamless functionality, and powerful features to elevate
            your online presence instantly.
          </p>
          <div className="flex items-center gap-3">
            <YellowButton
              text={"Get started"}
              href={"/pricing"}>
              <img
                src={ArrowRight}
                loading="lazy"
              />
            </YellowButton>
            <WhiteButton
              href={"/features"}
              text={"Learn more"}
            />
          </div>
        </div>
        <div>
          <img
            src={HomeHeroImg}
            className="max-sm:hidden"
            loading="lazy"
          />
          <img
            src={HomeHeroMobImg}
            className="sm:hidden"
            loading="lazy"
          />
        </div>
        <p className="text-white font-bold">
          {`Trusted by the world’s leading organizations`}
        </p>
        <div className="gradient max-w-full overflow-hidden select-none">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center justify-start gap-10">
            {[...logos, ...logos, ...logos].map((logo, i) => {
              return (
                <img
                  key={i}
                  className="opacity-50 select-none"
                  src={logo}
                />
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
