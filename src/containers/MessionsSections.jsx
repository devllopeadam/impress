import { Mission, Story } from "../assets";
import { statistics } from "../constants";

const MessionsSections = () => {
  return (
    <div className="section">
      <div className="container flex flex-col gap-12">
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
          </div>
          <div className="flex items-center overflow-hidden rounded-radius">
            <img
              src={Story}
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
          </div>
          <div className="flex items-center overflow-hidden rounded-radius -order-1">
            <img
              src={Mission}
              className="w-[488px]"
            />
          </div>
        </div>
        <div className="bg-accent-primary rounded-radius">
          <div className="py-12 px-8">
            <div className="mx-auto max-w-[1060px] grid-cols-1 sm:grid-cols-2 grid md:grid-cols-4 items-start grid-rows-[auto] gap-14">
              {statistics.map((statistic) => {
                return (
                  <div
                    key={statistic.number}
                    className="flex flex-col justify-center gap-2 max-sm:text-center">
                    <h1 className="text-dark-primary text-[35px] sm:text-[44px] font-bold">
                      {statistic.number}
                    </h1>
                    <h1 className="text-dark-secondary text-[14px]">
                      {statistic.label}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessionsSections;
