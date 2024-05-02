import { PageTitle } from "../components";
import { CamparePlans, PricingHero, QuickHelp } from "../containers";
const Pricing = () => {
  return (
    <>
      <PageTitle title={"Pricing"} />
      <PricingHero />
      <CamparePlans />
      <QuickHelp />
    </>
  );
};

export default Pricing;
