import { useParams } from "react-router-dom";
import { PageTitle } from "../components";

const Blog = () => {
  const { name } = useParams();

  return (
    <div>
      <PageTitle title={name} />
      <p className="text-3xl">{name}</p>
    </div>
  );
};

export default Blog;
