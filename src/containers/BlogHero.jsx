import { motion } from "framer-motion";
import { variants } from "../constants";
import { ArrowRight, Blog1, CalendarWhite } from "../assets";
import { YellowButton } from "../components";

const BlogHero = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className=" flex flex-col gap-20">
      <div className="bg-dark-primary rounded-radius py-16 max-lg:px-10">
        <div className="flex max-md:flex-col gap-10 md:gap-14 max-w-[1200px] mx-auto justify-center items-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div
                style={{ border: "1px solid rgba(255, 255, 255, .08)" }}
                className="flex items-center justify-center text-[12px] text-white-secondary py-[6px] px-3 rounded-full">
                <p>Resources</p>
              </div>
              <p className="text-[12px] text-white font-semibold flex items-center gap-2">
                <img src={CalendarWhite} />
                Nov 8, 2023
              </p>
            </div>
            <h1 className="text-[32px] lg:text-[44px] text-white font-semibold text-center max-w-[540px]">
              The History Of Web Design
            </h1>
            <YellowButton
              text={"Read article"}
              href={"/blog/the-history-of-web-design"}>
              <img
                src={ArrowRight}
                loading="lazy"
              />
            </YellowButton>
          </div>
          <img
            src={Blog1}
            className="lg:w-[600px] md:w-[450px] md:h-[350px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="max-sm:text-[32px] text-[44px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
          Get fresh SaaS insights, weekly
        </h1>
        <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
          Time and money-saving tips, straight to your inbox
        </p>
        <div className="flex flex-col gap-5 max-w-[470px] w-full mx-auto">
          <div className="flex items-center max-sm:flex-col max-sm:items-stretch gap-3 max-h-[52px]">
            <input
              type="text"
              placeholder="Email"
              required
              className="max-sm:w-full rounded-radius flex-1 placeholder:text-dark-secondary min-h-[52px] text-[14px] bg-white text-dark-primary border border-[#ececec] focus:border-black transition-all duration-200 outline-none py-3 px-5"
            />
            <YellowButton text={"Subscribe"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHero;
