import {
  BlogSection,
  ElevateBusiness,
  FeaturesSection,
  HomeHero,
  QuickHelp,
  StatisticsSection,
  TestimonialsSection,
  UnlockIt,
} from "../containers";

const Home = () => {
  return (
    <>
      <HomeHero />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <BlogSection />
      <ElevateBusiness />
      <QuickHelp />
      <UnlockIt />
    </>
  );
};

export default Home;
