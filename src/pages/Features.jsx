import { PageTitle } from "../components";
import {
  ElevateBusiness,
  FeaturesHero,
  QuickHelp,
  ServicesSection,
  UnlockIt,
} from "../containers";
import PricePlan from "../containers/PricePlan";

const Features = () => {
  return (
    <>
      <PageTitle title={"Features"} />
      <FeaturesHero />
      <ServicesSection />
      <PricePlan />
      <ElevateBusiness />
      <QuickHelp />
      <UnlockIt />
    </>
  );
};

export default Features;
