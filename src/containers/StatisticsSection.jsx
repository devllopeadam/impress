import { motion } from "framer-motion";
import { statistics, variants } from "../constants";

const StatisticsSection = () => {
  return (
    <div className="section">
      <motion.div
        animate={"animate"}
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container">
        <div className="flex mb-14 flex-col items-center justify-center max-w-[800px] gap-5 mx-auto">
          <div className="title flex items-center justify-center text-[12px] text-dark-secondary py-[6px] px-3 rounded-full">
            <p>Features</p>
          </div>
          <h1 className="text-[45px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Handy features that will help reach your goals
          </h1>
        </div>
        <div className="mx-auto bg-white rounded-radius py-12 px-8">
          <div className=" max-w-[1060px] mx-auto grid-cols-1 sm:grid-cols-2 grid md:grid-cols-4 items-start grid-rows-[auto] gap-14">
            {statistics.map((statistic) => {
              return (
                <div
                  key={statistic.number}
                  className="flex flex-col justify-center gap-2 max-sm:text-center">
                  <h1 className="text-dark-primary text-[35px] sm:text-[44px] font-bold">
                    {statistic.number}
                  </h1>
                  <h1 className="text-dark-secondary text-[14px]">
                    {statistic.label}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatisticsSection;
