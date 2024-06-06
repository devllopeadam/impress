import { motion } from "framer-motion";
import { members, variants } from "../constants";
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "../assets";

const Team = () => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-8">
        <div className="flex flex-col gap-6 mx-auto max-w-[800px]">
          <h1 className="max-sm:text-[32px] text-[44px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Meet the team
          </h1>
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            Behind every great product is a great team. Get to know the talented
            individuals who make Impress possible and share our passion for
            creativity and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {members.map((member) => {
            return (
              <div
                key={member.name}
                className="flex flex-col gap-1">
                <img
                  style={{ aspectRatio: "3/4" }}
                  className="object-cover rounded-radius"
                  src={member.image}
                  loading="lazy"
                />
                <p className="text-dark-primary font-semibold text-xl mt-2">
                  {member.name}
                </p>
                <p className="text-dark-secondary text-[12px]">
                  {member.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-6">
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            Trusted by the world’s leading organizations
          </p>
          <div className="flex gap-8 items-center flex-wrap justify-center">
            <img
              src={Logo1}
              loading="lazy"
              className="opacity-50"
            />
            <img
              src={Logo2}
              loading="lazy"
              className="opacity-50"
            />
            <img
              src={Logo3}
              loading="lazy"
              className="opacity-50"
            />
            <img
              src={Logo4}
              loading="lazy"
              className="opacity-50"
            />
            <img
              src={Logo5}
              loading="lazy"
              className="opacity-50"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
