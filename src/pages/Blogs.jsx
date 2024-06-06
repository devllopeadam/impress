import { PageTitle } from "../components";
import { BlogHero, BlogsFilter } from "../containers";

const Blogs = () => {
  return (
    <>
      <PageTitle title={"Blog"} />
      <BlogHero />
      <BlogsFilter />
    </>
  );
};

export default Blogs;
