import { useQuery } from '@apollo/client'
import React from 'react'
import GET_BLOGS_INTO from '../../graphql/queries'

const Blogs = () => {
    const {loading,data,errors} = useQuery(GET_BLOGS_INTO)
  return (
    <div>
      {data && data.posts && data.posts.data.map((post) => (
            <h1 >{post.title}</h1>

        ))}
    </div>
  )
}

export default Blogs