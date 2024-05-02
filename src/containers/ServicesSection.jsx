import { motion } from "framer-motion";
import { ArrowRight, Card1, Card2, Check } from "../assets";
import { YellowButton } from "../components";
import { variants } from "../constants";

const ServicesSection = () => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-12">
        <div className="flex justify-between items-center max-md:flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="sm:text-[44px] text-[32px] text-dark-primary font-semibold leading-[1.1] tracking-tight">
              Intuitive design <br /> interface
            </h1>
            <p className="text-dark-secondary max-w-[480px]">
              Our intuitive design interface makes creating stunning content a
              breeze. With drag-and-drop functionality, customizable templates,
              and a wide range of design elements, you can easily create
              professional-looking presentations, documents, and more in
              minutes.
            </p>
            <div className="flex flex-col border-t border-t-dark-divider">
              <div className="flex items-center gap-4 py-4 border-b border-b-dark-divider">
                <img
                  src={Check}
                  loading="lazy"
                />
                <p className="text-dark-secondary">
                  Intuitive drag-and-drop interface
                </p>
              </div>
              <div className="flex items-center gap-4 py-4 border-b border-b-dark-divider">
                <img
                  src={Check}
                  loading="lazy"
                />
                <p className="text-dark-secondary">
                  A variety of customizable templates
                </p>
              </div>
            </div>
            <YellowButton
              className="w-fit"
              text={"Get started"}
              href={"/pricing"}>
              <img
                src={ArrowRight}
                loading="lazy"
              />
            </YellowButton>
          </div>
          <div className="flex items-center overflow-hidden rounded-radius">
            <img
              src={Card1}
              className="w-[488px]"
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-dark-divider"></div>
        <div className="flex justify-between items-center max-md:flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="sm:text-[44px] text-[32px] text-dark-primary font-semibold leading-[1.1] tracking-tight">
              Seamless collaboration
            </h1>
            <p className="text-dark-secondary max-w-[480px]">
              Collaborate effortlessly with your team members, clients, and
              stakeholders with our seamless collaboration tools. Share, edit,
              and review content in real-time, track changes, and stay organized
              with built-in version control.
            </p>
            <div className="flex flex-col border-t border-t-dark-divider">
              <div className="flex items-center gap-4 py-4 border-b border-b-dark-divider">
                <img
                  src={Check}
                  loading="lazy"
                />
                <p className="text-dark-secondary">
                  Collaborate with team members in real-time
                </p>
              </div>
              <div className="flex items-center gap-4 py-4 border-b border-b-dark-divider">
                <img
                  src={Check}
                  loading="lazy"
                />
                <p className="text-dark-secondary">
                  Leave comments and annotations directly on the content
                </p>
              </div>
            </div>
            <YellowButton
              className="w-fit"
              text={"Get started"}
              href={"/pricing"}>
              <img
                src={ArrowRight}
                loading="lazy"
              />
            </YellowButton>
          </div>
          <div className="flex items-center overflow-hidden rounded-radius -order-1">
            <img
              src={Card2}
              className="w-[488px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
