
import { gql } from "@apollo/client";
const GET_BLOGS_INTO = gql`
query{
    posts{
      data{
        title
      }
    }
  }
  `;

  export default GET_BLOGS_INTO