import { motion } from "framer-motion";
import { pricePlans, variants } from "../constants";
import { WhiteButton, YellowButton } from "../components";
import { ArrowRight } from "../assets";

const PricePlan = () => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container">
        <div className="grid grid-cols-1 max-md:gap-8 md:grid-cols-3 w-full rounded-[24px] bg-transparent md:bg-white">
          {pricePlans.map((pricePlan, i) => {
            return (
              <div
                key={pricePlan.priceName + "_features"}
                className={`relative flex flex-col gap-4 p-8 max-md:bg-white ${
                  i === 1
                    ? "best-choice rounded-b-[24px] max-md:mt-[24px]"
                    : "max-md:rounded-[24px]"
                }`}>
                {i === 1 && (
                  <div
                    style={{ width: "calc(100% + 2px)" }}
                    className="absolute bg-accent-primary flex items-center justify-center h-[28px] rounded-t-[24px] -top-[28px] left-1/2 -translate-x-1/2">
                    <p className="text-[14px] font-bold">Best Choice</p>
                  </div>
                )}
                <h1 className="text-dark-primary text-xl font-semibold">
                  {pricePlan.priceName}
                </h1>
                <h1 className="text-dark-primary text-[32px] sm:text-[44px] font-semibold">
                  {pricePlan.Price}
                </h1>
                <p className="text-dark-secondary text-[12px]">
                  {pricePlan.property}
                </p>
                <p className="text-dark-primary leading-[1.5]">
                  {pricePlan.info}
                </p>
                {i === 0 || i === 2 ? (
                  <WhiteButton
                    text={pricePlan.textButton}
                    href={"/pricing"}
                  />
                ) : (
                  <YellowButton
                    text={pricePlan.textButton}
                    href={"/pricing"}>
                    <img
                      src={ArrowRight}
                      loading="lazy"
                    />
                  </YellowButton>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default PricePlan;
