import { Link } from "react-router-dom";
import { ArrowRight, LogoHeader } from "../assets";
import { links } from "../constants";
import { YellowButton } from "../components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <motion.header className={`relative`}>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex items-center justify-between py-[12px] px-4 bg-white rounded-radius flex-1">
          <Link
            to="/"
            className="">
            <img src={LogoHeader} />
          </Link>
          <div className="flex items-center gap-5 max-lg:hidden">
            {links.map((link) => {
              return (
                <Link
                  className="text-[14px] text-dark-secondary hover:text-dark-primary transition-colors font-medium"
                  to={link.href}
                  key={link.label + "_link"}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a
            href="#"
            className="max-lg:hidden block font-semibold text-[14px]text-dark-primary transition-colors">
            Log in
          </a>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setShow(!show)}>
            {!show ? (
              <FiMenu className="lg:hidden block text-[25px]" />
            ) : (
              <IoClose className="lg:hidden block text-[25px]" />
            )}
          </div>
        </div>
        <YellowButton
          className="max-lg:hidden"
          text={"Purchase"}
          href={"#"}>
          <img src={ArrowRight} />
        </YellowButton>
      </div>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden flex flex-col items-center gap-8 bg-white p-4 rounded-radius absolute w-full top-[65px]">
          {links.map((link) => {
            return (
              <Link
                onClick={() => setShow(false)}
                className="text-[20px] text-dark-primary transition-colors font-medium"
                to={link.href}
                key={link.label + "_link"}>
                {link.label}
              </Link>
            );
          })}
          <YellowButton
            text={"Purchase"}
            href={"#"}>
            <img src={ArrowRight} />
          </YellowButton>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
