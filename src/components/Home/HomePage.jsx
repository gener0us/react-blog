import { useQuery } from "@apollo/client";
import { GET_BLOGS_INTO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data } = useQuery(GET_BLOGS_INTO);

  return (
    <>
      <div className="container py-16">
        <div className="text-left pb-6">
          <h1 className="font-black text-4xl pb-2 text-gray-900">Most Read blogs</h1>
          <p className="font-semibold text-lg text-gray-700"> Lorem ipsum </p>
        </div>
        <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data &&
            data.posts &&
            data.posts.data
              .slice(8, 16)
              .map((post) => <CardEl key={post.id} {...post} />)}
        </div>
        <Link to={"/blogs"} className="btn-primary">Show All</Link>
      </div>
    </>
  );
};

export default HomePage;
