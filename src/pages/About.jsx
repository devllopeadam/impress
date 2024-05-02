import { PageTitle } from "../components";
import { MessionsSections, UnlockIt, AboutHero, Team } from "../containers";

const About = () => {
  return (
    <>
      <PageTitle title={"About"} />
      <AboutHero />
      <MessionsSections />
      <Team />
      <UnlockIt />
    </>
  );
};

export default About;
