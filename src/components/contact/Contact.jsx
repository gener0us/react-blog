import { useState } from "react"
import { v4 } from "uuid"

import ContactList from "./ContactList"
import inputs from "../../constants/inputs"

const Contact = () => {
  const [contacts, setContacts] = useState([])
  const [alert, setAlert] = useState("")
  const [contact, setContact] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    id: ''
  })

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value 

    setContact((contact) => ({...contact, [name]: value}))
  }

  const AddHandler = (e) => {
    e.preventDefault()

    if (
        !contact.email || 
        !contact.lastname || 
        !contact.name || 
        !contact.phone
    ) {
      setAlert("please enter valid data !!")
      return

    }

    setAlert("")
    const newContact = {...contact, id: v4()}
    setContacts((contacts) => ([...contacts, newContact]))
    setContact({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      id: ''
    })

    console.log(contact, contacts)
  }

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="font-black text-4xl pt-12 pb-2 text-purple-800"> Contact App </h1>
        <p className="font-semibold text-lg text-purple-900"> Lorem ipsum | React js Full Course </p>
      </div>
      <form className="p-5 bg-white shadow-xl shadow-purple-300 mt-10 rounded-xl">
        <div className="grid grid-cols-2 gap-3">
          {
            inputs.map((input, index) => (
              <div key={index}>
                <label htmlFor={input.id} 
                  className="block mb-2 text-sm font-medium text-gray-900">
                    {input.name}
                </label>
                <input
                  id={input.id}
                  className="input-style" 
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  onChange={changeHandler}
                  value={contact[input.name]}
                />
              </div>
            ))
          }
          </div>
          <div>
        </div>
        <button onClick={AddHandler} className="btn-primary mt-5">Add User</button>      
      </form>
      <div>
        {alert && <p className="mt-8 p-4 bg-red-200 text-red-800 rounded-lg">{alert}</p>}
      </div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  )
}

export default Contact