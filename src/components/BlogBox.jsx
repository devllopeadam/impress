/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Calendar } from "../assets";
import { motion } from "framer-motion";

const BlogBox = ({ image, blogName, category, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}>
      <Link
        to={`/blog/${blogName.toLowerCase().split(" ").join("-")}/`}
        className="group flex flex-col gap-4">
        <div className="overflow-hidden rounded-radius">
          <img
            src={image}
            loading="lazy"
            className="group-hover:scale-105 duration-300 transition-transform"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="bg-white-background-dark py-[6px] px-3 text-[12px] rounded-full text-dark-primary">
            {category}
          </p>
          <p className="text-[12px] text-dark-primary flex items-center gap-2">
            <img src={Calendar} />
            {date}
          </p>
        </div>
        <h1 className="text-dark-primary text-2xl font-semibold tracking-tight leading-[1.2]">
          {blogName}
        </h1>
      </Link>
    </motion.div>
  );
};

export default BlogBox;
