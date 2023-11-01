import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_BLOG_INTO } from "../../graphql/queries"

const BlogPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_BLOG_INTO, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <div>
      <h1>{data.post.title}</h1>
    </div>
  )
}

export default BlogPage;
