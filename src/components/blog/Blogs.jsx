import { useQuery } from "@apollo/client";
import { GET_BLOGS_INTO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";

const Blogs = () => {
  const { data } = useQuery(GET_BLOGS_INTO);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-5">
        {data &&
          data.posts &&
          data.posts.data.map((post) => <CardEl key={post.id} {...post} />)}
      </div>
    </div>
  );
};

export default Blogs;
