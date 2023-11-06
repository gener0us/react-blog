import PropTypes from "prop-types"
import UserItem from "./UserItem"

const userList = ({ users, deleteHandler }) => {
  console.log(users);
  return (
    <div className="py-14">
      <h3 className="font-black text-2xl text-purple-800">usersList</h3>
      <ul className="p-5 mt-7 bg-white shadow-lg rounded-lg">
        {users.length ? (
          users.map((contact) => (
            <UserItem 
              key={contact.id} 
              data={contact} 
              deleteHandler={deleteHandler} />
          ))
        ) : (
          <p className="text-center font-bold text-gray-700 bg-gray-100 p-3 rounded-lg mb-3 last:mb-0">
            No users Yet
          </p>
        )}
      </ul>
    </div>
  );
};

export default userList;

userList.propTypes = {
  contacts: PropTypes.array,
  deleteHandler: PropTypes.func
};
