import { useParams } from "react-router-dom";

const Blog = () => {
  const { name } = useParams();

  console.log(name);

  return (
    <div>
      <p className="text-3xl">{name}</p>
    </div>
  );
};

export default Blog;
