import { gql } from "@apollo/client";

const GET_BLOGS_INTO = gql`
  query {
    posts {
      data {
        title
        body
        user {
          name
        }
        id
        comments {
          data {
            id
          }
        }
      }
    }
  }
`;

const GET_USERS_INTO = gql`
  query{
    users{
      data{
        name
        username
        id
        email
        phone
      }
    }
  }
`;

const GET_BLOG_INTO = gql`
  query getPostSingle($id: ID!) {
    post(id: $id) {
      title
      body
      comments {
        data {
          id
          name
          email
          body
        }
      }
    }
  }
`;

export {GET_BLOGS_INTO, GET_BLOG_INTO, GET_USERS_INTO}
