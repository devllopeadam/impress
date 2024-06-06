import { useLoaderData, useParams } from "react-router-dom";
import { PageTitle, RelatedArticles } from "../components";
import { blogs } from "../constants";
import { BlogItemHero } from "../containers";

const Blog = () => {
  const { name } = useParams();
  const blog = useLoaderData();
  const final = name
    .split("-")
    .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    .join(" ");
  const filtred = blogs.filter((blog) => blog.blogName !== final && blog);
  return (
    <>
      <PageTitle title={final} />
      <BlogItemHero {...blog} />
      <RelatedArticles array={filtred} />
    </>
  );
};

export const blogLoader = async ({ params }) => {
  const final = params.name
    .split("-")
    .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    .join(" ");
  return blogs.filter((blog) => blog.blogName === final)[0];
};

export default Blog;
