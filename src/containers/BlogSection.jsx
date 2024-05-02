import { motion } from "framer-motion";
import { blogsSection, variants } from "../constants";
import { BlogBox, WhiteButton } from "../components";

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
          <h1 className="max-sm:text-[32px] text-[45px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Get weekly insights
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-16">
          {blogsSection.map((blogSection) => {
            return (
              <BlogBox
                key={blogSection + "_blog_section"}
                {...blogSection}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <WhiteButton
            className="mx-auto"
            text={"All articles"}
            href={"/blog"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSection;
