import { motion } from "framer-motion";
import { featuresCards, variants } from "../constants";

const FeaturesSection = () => {
  return (
    <div className="section">
      <motion.div
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-4">
          {featuresCards.map((card, i) => {
            return (
              <div
                key={card.title}
                className={`flex flex-col overflow-hidden justify-between gap-2 rounded-radius bg-accent-primary p-8 ${
                  (card.type === "big1" || card.type === "big2") &&
                  "sm:col-span-2"
                } ${i === 4 && "max-md:-order-1"}`}>
                <div className="flex flex-col gap-2">
                  <h3
                    className={`text-dark-primary ${
                      card.type === "big1" || card.type === "big2"
                        ? "text-2xl"
                        : "text-xl"
                    } font-semibold`}>
                    {card.title}
                  </h3>
                  {card.type === "simple" && (
                    <p className="text-[14px] text-dark-secondary">
                      {card.subtitle}
                    </p>
                  )}
                </div>
                <div
                  className={`${
                    (i === 0 || i === 3 || i === 4) &&
                    "-mr-[32px] -mb-[32px] -ml-[32px] self-stretch"
                  }`}>
                  <img
                    src={card.srcImg}
                    className={`${i === 2 && "w-[144px]"} 
                    ${(i === 0 || i === 3) && "w-full mx-auto"} ${
                      i === 4 && "mx-auto"
                    } ${i === 5 && "w-[120px]"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
