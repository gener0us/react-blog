import { useQuery } from "@apollo/client";
import { GET_BLOGS_INTO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";

const Blogs = () => {
  const { data } = useQuery(GET_BLOGS_INTO);

  return (
    <div className="container py-16">
      <div className="text-left pb-6">
        <h1 className="font-black text-4xl pb-2 text-gray-900">
          ALL blogs
        </h1>
        <p className="font-semibold text-lg text-gray-700"> Lorem ipsum </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data &&
          data.posts &&
          data.posts.data
            .map((post) => <CardEl key={post.id} {...post} />)}
        </div>
      </div>
  );
};

export default Blogs;
