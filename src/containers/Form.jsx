import { motion } from "framer-motion";
import { variants } from "../constants";
import { Facebook, Instagrame, Linkedin, Tiktok, X, Youtube } from "../assets";

const Form = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container bg-white py-8 px-4 md:p-16 rounded-radius grid gap-6 grid-cols-1 md:grid-cols-[1fr_1.5fr] grid-rows-[auto]">
      <div className="flex flex-col justify-between items-start">
        <h1 className="text-dark-primary text-[32px] md:text-[44px] font-semibold">
          Drop us a line
        </h1>
        <div className="flex max-md:hidden flex-col gap-2">
          <p className="text-dark-primary font-semibold">Follow us</p>
          <div className="flex gap-3 items-center">
            <a
              href="#"
              className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
              <img
                loading="lazy"
                src={Facebook}
              />
            </a>
            <a
              href="#"
              className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
              <img
                loading="lazy"
                src={Instagrame}
              />
            </a>
            <a
              href="#"
              className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
              <img
                loading="lazy"
                src={X}
              />
            </a>
            <a
              href="#"
              className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
              <img
                loading="lazy"
                src={Linkedin}
              />
            </a>
            <a
              href="#"
              className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
              <img
                loading="lazy"
                src={Tiktok}
              />
            </a>
            <a
              href="#"
              className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
              <img
                loading="lazy"
                src={Youtube}
              />
            </a>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-dark-primary text-[14px]">
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            id="name"
            className="max-sm:w-full rounded-radius flex-1 placeholder:text-dark-secondary min-h-[52px] text-[14px] bg-white text-dark-primary border border-[#ececec] focus:border-black transition-all duration-200 outline-none py-3 px-5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-dark-primary text-[14px]">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="your@email.com"
            required
            className="max-sm:w-full rounded-radius flex-1 placeholder:text-dark-secondary min-h-[52px] text-[14px] bg-white text-dark-primary border border-[#ececec] focus:border-black transition-all duration-200 outline-none py-3 px-5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-dark-primary text-[14px]">
            How can we help you
          </label>
          <textarea
            type="text"
            id="message"
            placeholder="your@email.com"
            required
            className="max-sm:w-full min-h-[125px] rounded-radius flex-1 placeholder:text-dark-secondary text-[14px] bg-white text-dark-primary border border-[#ececec] focus:border-black transition-all duration-200 outline-none py-3 px-5"></textarea>
        </div>
        <button
          type="submit"
          style={{ boxShadow: "inset 0 0 0 1px rgba(51, 41, 36, .08)" }}
          className={`flex w-fit cursor-pointer font-semibold rounded-radius py-3 px-5 sm:py-4 sm:px-6 transition-all duration-200 text-dark-primary bg-accent-primary hover:bg-accent-hover items-center justify-center text-center gap-2`}>
          Send message
        </button>
      </form>
      <div className="flex md:hidden flex-col gap-2">
        <p className="text-dark-primary font-semibold">Follow us</p>
        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
            <img
              loading="lazy"
              src={Facebook}
            />
          </a>
          <a
            href="#"
            className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
            <img
              loading="lazy"
              src={Instagrame}
            />
          </a>
          <a
            href="#"
            className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
            <img
              loading="lazy"
              src={X}
            />
          </a>
          <a
            href="#"
            className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
            <img
              loading="lazy"
              src={Linkedin}
            />
          </a>
          <a
            href="#"
            className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
            <img
              loading="lazy"
              src={Tiktok}
            />
          </a>
          <a
            href="#"
            className="bg-[#412d3d0f] hover:bg-[#412d3d26] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-[10px]">
            <img
              loading="lazy"
              src={Youtube}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;
