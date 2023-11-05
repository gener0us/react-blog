import PropTypes from "prop-types"
import ContactItem from "./ContactItem"

const ContactList = ({ contacts, deleteHandler }) => {
  console.log(contacts);
  return (
    <div className="py-14">
      <h3 className="font-black text-2xl text-purple-800">ContactsList</h3>
      <ul className="p-5 mt-7 bg-white shadow-lg rounded-lg">
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactItem 
              key={contact.id} 
              data={contact} 
              deleteHandler={deleteHandler} />
          ))
        ) : (
          <p className="text-center font-bold text-gray-700 bg-gray-100 p-3 rounded-lg mb-3 last:mb-0">
            No Contacts Yet
          </p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteHandler: PropTypes.func
};
