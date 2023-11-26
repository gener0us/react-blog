import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_BLOG_INTO } from "../../graphql/queries";

const BlogPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_BLOG_INTO, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container py-14">
      <h1 className="font-black text-4xl pb-2 text-gray-900 mb-5">
        {data.post.title}
      </h1>
      <p className="font-medium text-base">{data.post.body}</p>
      <div className="comments">
        {data.post &&
          data.post.comments &&
          data.post.comments.data.map((comment) => {
            <h1>{comment.name}</h1>
          })}
      </div>
    </div>
  );
};

export default BlogPage;
