import { motion } from "framer-motion";
import { Mission, Story } from "../assets";
import { statistics, variants } from "../constants";

const MessionsSections = () => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-12">
        <div className="flex justify-between items-center max-md:flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="sm:text-[44px] text-[32px] text-dark-primary font-semibold leading-[1.1] tracking-tight">
              Our story
            </h1>
            <p className="text-dark-secondary max-w-[480px]">
              {`At Impress, our story is one of innovation and determination.
              Founded with a vision to empower individuals and businesses to
              express their ideas effectively, we've since grown into a leading
              provider of content creation solutions. Our journey is fueled by a
              relentless pursuit of excellence and a commitment to delivering
              unparalleled value to our users.`}
            </p>
          </div>
          <div className="flex items-center overflow-hidden rounded-radius">
            <img
              src={Story}
              className="w-[488px]"
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-dark-divider"></div>
        <div className="flex justify-between items-center max-md:flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="sm:text-[44px] text-[32px] text-dark-primary font-semibold leading-[1.1] tracking-tight">
              Our mission
            </h1>
            <p className="text-dark-secondary max-w-[480px]">
              {`Our mission is simple: to provide you with the tools and support
              you need to unleash your creativity and achieve your goals.
              Whether you're a seasoned professional or just starting, we're
              here to help you bring your ideas to life and make an impact.`}
            </p>
          </div>
          <div className="flex items-center overflow-hidden rounded-radius -order-1">
            <img
              src={Mission}
              className="w-[488px]"
            />
          </div>
        </div>
        <div className="bg-accent-primary rounded-radius">
          <div className="py-12 px-8">
            <div className="mx-auto max-w-[1060px] grid-cols-1 sm:grid-cols-2 grid md:grid-cols-4 items-start grid-rows-[auto] gap-14">
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
        </div>
      </motion.div>
    </div>
  );
};

export default MessionsSections;
