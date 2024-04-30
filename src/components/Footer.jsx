import { motion } from "framer-motion";
import { row1, row2, variants } from "../constants";
import { Link } from "react-router-dom";
import { YellowButton } from "../components";
import { LogoHeader } from "../assets";

const Footer = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-5 md:grid-cols-[1fr_1fr_1fr_2fr] grid-rows-[auto] pb-5">
            {row1.map((ele) => {
              return !ele.type ? (
                <div
                  key={ele.title + "_footer"}
                  className="flex flex-col gap-5">
                  <p className="text-dark-primary text-[14px] font-bold">
                    {ele.title}
                  </p>
                  {ele.links.map((link) => {
                    return (
                      <Link
                        to={link.href}
                        className="text-[14px] text-dark-secondary"
                        key={link.label + "_footer"}>
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div
                  key={ele.title + "_footer"}
                  className="flex flex-col gap-5 max-sm:hidden">
                  <p className="text-dark-primary text-[14px] font-bold">
                    {ele.title}
                  </p>
                  <div className="flex items-center max-sm:flex-col max-sm:items-start gap-3 max-h-[52px]">
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      className="max-sm:w-full rounded-radius flex-1 placeholder:text-dark-secondary h-[52px] text-[14px] bg-white text-dark-primary border border-[#ececec] focus:border-black transition-all duration-200 outline-none py-3 px-5"
                    />
                    <YellowButton text={"Subscribe"} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 sm:hidden">
            <p className="text-dark-primary text-[14px] font-bold">
              Subscribe to newsletter
            </p>
            <div className="flex items-center sm:hidden max-sm:items-start gap-3 max-h-[52px]">
              <input
                type="text"
                placeholder="Email"
                required
                className="max-sm:w-full rounded-radius flex-1 placeholder:text-dark-secondary h-[52px] text-[14px] bg-white text-dark-primary border border-[#ececec] focus:border-black transition-all duration-200 outline-none py-3 px-5"
              />
              <YellowButton text={"Subscribe"} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-dark-divider"></div>
          <div className="flex sm:flex-row flex-col max-sm:items-start gap-5 justify-between items-center w-full">
            <div className="flex items-center gap-4">
              {row2.first.map((ele) => {
                return (
                  <a
                    href="#"
                    key={ele}
                    className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
                    <img
                      loading="lazy"
                      src={ele}
                    />
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              {row2.second.map((ele) => {
                return (
                  <a
                    href="#"
                    key={ele}
                    className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
                    <img
                      loading="lazy"
                      src={ele}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="w-full h-[1px] bg-dark-divider"></div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/"
              className="">
              <img src={LogoHeader} />
            </Link>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-[14px] text-dark-secondary hover:text-dark-secondary duration-300 transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[14px] text-dark-secondary hover:text-dark-secondary duration-300 transition-colors">
                Terms of Use
              </a>
              <a
                href="#"
                className="text-[14px] text-dark-secondary hover:text-dark-secondary duration-300 transition-colors">
                Cookie Policy
              </a>
            </div>
            <p className="text-[14px] text-dark-primary">
              © 2024 Impress. Made by Adam
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
