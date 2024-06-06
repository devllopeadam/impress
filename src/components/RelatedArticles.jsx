/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { variants } from "../constants";
import BlogBox from "./BlogBox";

const RelatedArticles = ({ array }) => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-5">
        <h1 className="text-dark-primary text-[32px] font-semibold md:text-[44px]">
          Related articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-16">
          {array.slice(3, 6).map((blogSection) => {
            return (
              <BlogBox
                key={blogSection.blogName + "all_blogs"}
                {...blogSection}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default RelatedArticles;
