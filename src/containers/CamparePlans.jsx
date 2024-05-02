import { motion } from "framer-motion";
import { camparePlans, variants } from "../constants";

const CamparePlans = () => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-7">
        <div className="flex flex-col gap-6 mx-auto max-w-[800px]">
          <h1 className="max-sm:text-[32px] text-[44px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Compare plans
          </h1>
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            Free 7-day trial. Set up in minutes
          </p>
        </div>
        <div className="grid overflow-auto max-sm:mx-2">
          <div className="grid grid-cols-4 max-sm:w-[600px] overflow-auto grid-row-[auto] py-4 border-t border-b border-dark-divider">
            <p className="text-xl font-semibold">Plans</p>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Basic</p>
              <p className="text-[12px] text-dark-secondary">Free forever</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Pro</p>
              <p className="text-[12px] text-dark-secondary">From $49/month</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Enterprise</p>
              <p className="text-[12px] text-dark-secondary">From $99/month</p>
            </div>
          </div>
          {camparePlans.map((plan, i) => {
            return (
              <div
                key={plan.plans}
                className="grid grid-cols-4 grid-row-[auto] items-center gap-4 border-b py-4 border-b-dark-divider">
                <p className="text-dark-secondary">{plan.plans}</p>
                {i === 0 || i === 1 || i === 3 ? (
                  <p className="text-dark-secondary">{plan.Basic}</p>
                ) : (
                  <img src={plan.Basic} />
                )}
                {i == 0 || i === 1 || i === 2 || i === 3 ? (
                  <p className="text-dark-secondary">{plan.Pro}</p>
                ) : (
                  <img src={plan.Pro} />
                )}
                {i == 0 || i === 1 || i === 2 || i === 3 ? (
                  <p className="text-dark-secondary">{plan.Entreprise}</p>
                ) : (
                  <img src={plan.Entreprise} />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CamparePlans;
