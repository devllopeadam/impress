import {
  BlogSection,
  FeaturesSection,
  HomeHero,
  StatisticsSection,
  TestimonialsSection,
} from "../containers";

const Home = () => {
  return (
    <>
      <HomeHero />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Home;
