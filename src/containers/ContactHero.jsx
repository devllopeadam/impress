import { motion } from "framer-motion";
import { contacts, variants } from "../constants";
import { WhiteButton } from "../components";

const ContactHero = () => {
  return (
    <div className="pb-0 pt-14">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-10">
        <div className="flex flex-col gap-6 mx-auto max-w-[800px]">
          <h1 className="max-sm:text-[32px] text-[56px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            Get in Touch
          </h1>
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            {`We're here to assist you in any way we can. Whether you have
            questions about our services, want to collaborate, or just want to
            say hello, feel free to reach out to us using the information below. `}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contacts.map((contact) => {
            return (
              <div
                key={contact.title}
                className="p-8 rounded-radius bg-white-background-dark flex flex-col gap-4 items-start">
                <img
                  src={contact.image}
                  className="w-12 -ml-3"
                />
                <div className="flex flex-col gap-3">
                  <p className="text-dark-primary text-xl font-semibold">
                    {contact.title}
                  </p>
                  <p className="text-dark-primary text-[14px]">
                    {contact.subtitle}
                  </p>
                </div>
                <WhiteButton text={contact.title} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactHero;
