/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { variants, blogs } from "../constants";
import { useEffect, useState } from "react";
import { BlogBox } from "../components";

const BlogsFilter = () => {
  const [blogsToShow, setBlogsToShow] = useState(blogs);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const filter = blogs.filter((blog) =>
      category === "all" ? blogs : blog.category === category
    );
    setBlogsToShow(filter);
  }, [category]);

  return (
    <div className="section max-md:mt-10">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-12">
        <div className="flex gap-4 items-center md:justify-center overflow-auto max-md:px-2">
          <FilterButton
            text={"All category"}
            category={category}
            setCategory={setCategory}
            pattern={"all"}
          />
          <FilterButton
            text={"Company news"}
            category={category}
            setCategory={setCategory}
            pattern={"Company news"}
          />
          <FilterButton
            text={"Insights"}
            category={category}
            setCategory={setCategory}
            pattern={"Insights"}
          />
          <FilterButton
            text={"Product updates"}
            category={category}
            setCategory={setCategory}
            pattern={"Product updates"}
          />
          <FilterButton
            text={"Resources"}
            category={category}
            setCategory={setCategory}
            pattern={"Resources"}
          />
          <FilterButton
            text={"Success Stories"}
            category={category}
            setCategory={setCategory}
            pattern={"Success Stories"}
          />
          <FilterButton
            text={"Tech Tips"}
            category={category}
            setCategory={setCategory}
            pattern={"Tech Tips"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-16">
          {blogsToShow.map((blogSection) => {
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

const FilterButton = ({ text, category, setCategory, pattern }) => {
  return (
    <button
      onClick={() => setCategory(pattern)}
      className={`text-nowrap font-semibold rounded-radius py-3 px-5 sm:py-3 sm:px-[18px] transition-all duration-500 hover:text-white hover:bg-dark-primary text-center ${
        category === pattern
          ? "bg-dark-primary text-white"
          : "text-dark-primary bg-white"
      }`}>
      {text}
    </button>
  );
};

export default BlogsFilter;
