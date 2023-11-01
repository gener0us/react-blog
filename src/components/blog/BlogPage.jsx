import { useQuery } from "@apollo/client"
// import { useParams } from "react-router-dom"
import { GET_BLOG_INTO } from "../../graphql/queries"

const BlogPage = () => {

  // const { id } = useParams()

  const { data } = useQuery(GET_BLOG_INTO)

  console.log(data)

  return (
    <div>BlogPage</div>
  )
}

export default BlogPage