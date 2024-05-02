import { motion } from "framer-motion";
import { Accordion } from "../components";
import { questions, variants } from "../constants";

const QuickHelp = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container max-md:px-5 bg-white-background-dark rounded-radius py-16">
      <div className="flex mb-14 flex-col items-center justify-center max-w-[800px] gap-5 mx-auto">
        <div className="title flex items-center justify-center text-[12px] text-dark-secondary py-[6px] px-3 rounded-full">
          <p>Quick help</p>
        </div>
        <h1 className="max-sm:text-[32px] text-[45px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
          Frequently asked questions
        </h1>
      </div>
      <div className="flex flex-col max-w-[600px] border border-t-dark-divider mx-auto">
        {questions.map((question) => {
          return (
            <Accordion
              key={question.question}
              {...question}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default QuickHelp;
