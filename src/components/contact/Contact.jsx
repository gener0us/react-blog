import { useState } from "react"
import ContactList from "./ContactList"

const Contact = () => {
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: ''
  })

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value 

    setContact((contact) => ({...contact, [name]: value}))
  }

  const AddHandler = () => {
    setContacts((contacts) => ([...contacts, contact]))
    console.log(contacts)
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="font-black text-4xl pt-12 pb-2 text-purple-800"> Contact App </h1>
        <p className="font-semibold text-lg text-purple-900"> Lorem ipsum | React js Full Course </p>
      </div>
      <form className="p-5 bg-white shadow-xl shadow-purple-300 mt-10 rounded-xl">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label 
              htmlFor="first_name" 
              className="block mb-2 text-sm font-medium text-gray-900">
                name
            </label>
            <input 
              type="text" 
              id="first_name" 
              className="input-style" 
              placeholder="name"
              name="name"
              onChange={changeHandler}
              value={contact.name} />
          </div>
          <div>
            <label 
              htmlFor="last_name" 
              className="block mb-2 text-sm font-medium text-gray-900"> 
              last name
            </label>
            <input 
              type="text" 
              id="last_name" 
              className="input-style" 
              placeholder="lastname" 
              name="lastname"
              onChange={changeHandler}
              value={contact.lastname} />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-gray-900">
                email
            </label>
            <input 
              type="email" 
              id="email" 
              className="input-style" 
              placeholder="email"
              name="email"
              onChange={changeHandler}
              value={contact.email} />
          </div>
          <div>
            <label 
              htmlFor="phome" 
              className="block mb-2 text-sm font-medium text-gray-900"> 
              phone number 
            </label>
            <input 
              type="text" 
              id="phome" 
              className="input-style" 
              placeholder="phone number" 
              name="phone"
              onChange={changeHandler}
              value={contact.phone} />
          </div> 
        </div>
        <button onClick={AddHandler} type="submit" className="btn-primary mt-5">Add User</button>      
      </form>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default Contact