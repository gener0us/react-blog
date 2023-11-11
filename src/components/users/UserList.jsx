import { useQuery } from '@apollo/client'
import { GET_USERS_INTO } from "../../graphql/queries"
import PropTypes from "prop-types"
import UserItem from "./UserItem"

const UserList = ({deleteHandler}) => { 

  const {data}= useQuery(GET_USERS_INTO)

  return (
    <div className="py-14">
      <h3 className="font-black text-2xl text-purple-800">usersList</h3>
      <ul className="p-5 mt-7 bg-white shadow-lg rounded-lg">
        {data &&
          data.users &&
          data.users.data.map((user) => (
            <UserItem 
              {...user}
              key={user.id}
              deleteHandler={deleteHandler}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default UserList;

UserList.propTypes = {
  contacts: PropTypes.array,
  deleteHandler: PropTypes.func
};
