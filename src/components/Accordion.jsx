/* eslint-disable react/prop-types */
import { useState } from "react";
import { Plus } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, response }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className="flex flex-col border-b border-b-dark-divider py-8 md:py-8 overflow-hidden cursor-pointer">
      <div className="flex justify-between cursor-pointer">
        <h3 className="font-semibold">{question}</h3>
        <div className="flex items-center justify-center">
          <img
            className={`transition-all duration-300 ${
              show ? "rotate-45" : "rotate-0"
            }`}
            src={Plus}
          />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
            <p className="font-normal text-dark-secondary leading-6 text-[16px] max-w-[560px] mt-8">
              {response}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
