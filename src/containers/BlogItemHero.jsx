/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { smalls, variants } from "../constants";
import { Calendar, Cta } from "../assets";
import { WhiteButton } from "../components";

const BlogItemHero = ({ image, category, date, blogName }) => {
  return (
    <div className="section">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-5">
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center text-[12px] bg-white-background-dark text-dark-secondary py-[6px] px-3 rounded-full">
            <p>{category}</p>
          </div>
          <p className="text-[12px] text-dark-primary flex items-center gap-2">
            <img src={Calendar} />
            {date}
          </p>
        </div>
        <div className="flex flex-col gap-6 mx-auto max-w-[800px]">
          <h1 className="max-sm:text-[32px] text-[56px] font-semibold text-dark-primary text-center leading-[1.1] tracking-tight">
            {blogName}
          </h1>
          <p className="max-w-[660px] mx-auto text-dark-secondary text-center">
            {`Tempora iusto cumque dolor maxime ab quia qui qui ut. Illum odio quam labore necessitatibus voluptas quis enim dolore delectus. Est sint sint necessitatibus ducimus sed. Molestiae facilis rerum quis illum sunt velit consequatur et perferendis. Reprehenderit tenetur cupiditate itaque qui ea co`}
          </p>
        </div>
        <div className="overflow-hidden rounded-radius w-full max-w-[1200px] mt-12">
          <img
            src={image}
            className="w-full"
          />
        </div>
        <div className="flex gap-7 max-md:flex-col items-start max-w-[900px] mx-auto mt-16">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <h1 className="text-dark-primary text-[35px] md:text-[44px] font-semibold leading-[1.1] tracking-tight">
              Ut ut sint laborum exercitationem dignissimos adipisci quia est.
            </h1>
            <p className="text-dark-secondary ">
              Libero aut harum a facilis consequatur sit non aut asperiores.
              Magnam et totam libero esse consequatur. Rem eum voluptate aut
              minima. Ut ex cumque et exercitationem eveniet qui. Est earum
              fugiat eum unde. Deleniti corrupti et iusto.
            </p>
            <h1 className="text-dark-primary font-semibold text-2xl">
              Totam culpa velit.
            </h1>
            <div className="flex items-center gap-5">
              <div className="bg-accent-primary min-w-[5px] h-[100px]" />
              <p className="text-[18px] text-dark-primary">
                Molestiae vel iste voluptatibus. Sunt deserunt modi quo
                molestiae nam est numquam dolores. In suscipit est sapiente quod
                mollitia id mollitia ratione id. Natus aperiam voluptate id
                libero aut quis.
              </p>
            </div>
            <p className="text-dark-secondary">
              Numquam modi numquam voluptatem fugit. Mollitia quia fuga eos
              tempore. Ut neque quam nulla qui et ut. Aut quisquam voluptatem
              quod voluptate sed sed tempore commodi. Deserunt similique
              repudiandae qui et ducimus dignissimos qui molestiae. Adipisci
              quas eos et dolores.
            </p>
            <p className="text-dark-secondary">
              Numquam modi numquam voluptatem fugit. Mollitia quia fuga eos
              tempore. Ut neque quam nulla qui et ut. Aut quisquam voluptatem
              quod voluptate sed sed tempore commodi. Deserunt similique
              repudiandae qui et ducimus dignissimos qui molestiae. Adipisci
              quas eos et dolores.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 items-start p-6 bg-accent-primary rounded-radius">
              <img src={Cta} />
              <p className="font-semibold text-dark-primary">
                Elevate Your Business with Impress
              </p>
              <p className="text-dark-secondary text-[14px]">
                Unleash the Power of Innovative SaaS Solutions Today!
              </p>
              <WhiteButton text={"Get started"} />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-dark-primary font-semibold">
                Share this article
              </p>
              <div className="flex gap-2 items-center">
                {smalls.map((ele) => {
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
              <p className="text-dark-secondary text-[12px]">
                Check out Instructions page to see how to activate social share
                functionality
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogItemHero;
