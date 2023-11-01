
import { gql } from "@apollo/client"

const GET_BLOGS_INTO = gql`
  query{
    posts{
      data{
        title
        body
        user{
          name
        }
        id
        comments{
          data{
           id
          }
        }
      }
    }
  }
`;

const GET_BLOG_INTO = gql`
  query getPost($id: String!) {
    post(where: { id: $id }) {
      title
    }
  }
`;

export {GET_BLOGS_INTO, GET_BLOG_INTO}