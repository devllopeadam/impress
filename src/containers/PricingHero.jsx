import { motion } from "framer-motion";
import { pricePlansPricing, variants } from "../constants";
import { useState } from "react";
import { WhiteButton, YellowButton } from "../components";
import { ArrowRight, Check } from "../assets";

const PricingHero = () => {
  const [method, setMethod] = useState("monthly");
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col items-center gap-8">
        <div className="flex flex-col gap-6 mx-auto max-w-[800px]">
          <h1 className="max-sm:text-[32px] text-[56px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Select your protection plan and start your 7-day free trial
          </h1>
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            The definitive Webflow template for SaaS companies, blending sleek
            design, seamless functionality, and powerful features to elevate
            your online presence instantly.
          </p>
        </div>
        <div className="flex flex-col items-center gap-16">
          <div className="flex items-center justify-center bg-white-background-dark rounded-full p-1 ">
            <div
              onClick={() => setMethod("monthly")}
              className={`cursor-pointer rounded-full text-dark-secondary py-[5px] px-3 text-[14px] transition-all duration-300 ${
                method === "monthly" ? "bg-white" : "bg-transparent"
              }`}>
              Monthly
            </div>
            <div
              onClick={() => setMethod("annual")}
              className={`cursor-pointer rounded-full text-dark-secondary py-[5px] px-3 text-[14px] transition-all duration-300 ${
                method === "annual" ? "bg-white" : "bg-transparent"
              }`}>
              🔥 Annual discount
            </div>
          </div>
          <div className="grid grid-cols-1 max-md:gap-8 md:grid-cols-3 w-full rounded-[24px] bg-transparent md:bg-white">
            {method === "monthly" &&
              pricePlansPricing[0].map((pricePlan, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    animate={{ opacity: 1, y: 0 }}
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
                    <div className="flex flex-col gap-5">
                      {pricePlan.properties.map((feature) => {
                        return (
                          <div
                            key={feature}
                            className="flex items-center gap-4">
                            <img
                              src={Check}
                              loading="lazy"
                            />
                            <p className="text-dark-secondary">{feature}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            {method === "annual" &&
              pricePlansPricing[1].map((pricePlan, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    animate={{ opacity: 1, y: 0 }}
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
                    <div className="flex flex-col gap-5">
                      {pricePlan.properties.map((feature) => {
                        return (
                          <div
                            key={feature}
                            className="flex items-center gap-4">
                            <img
                              src={Check}
                              loading="lazy"
                            />
                            <p className="text-dark-secondary">{feature}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingHero;
