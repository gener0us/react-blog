
import { gql } from "@apollo/client";
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

  export default GET_BLOGS_INTO