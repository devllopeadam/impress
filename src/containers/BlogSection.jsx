import { motion } from "framer-motion";
import { variants } from "../constants";

const BlogSection = () => {
  return (
    <div className="section">
      <motion.div
        className="container"
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <div className="flex mb-14 flex-col items-center justify-center max-w-[800px] gap-5 mx-auto">
          <div className="title flex items-center justify-center text-[12px] text-dark-secondary py-[6px] px-3 rounded-full">
            <p>Blog</p>
          </div>
          <h1 className="text-[45px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Get weekly insights
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSection;
