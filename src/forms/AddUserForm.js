import React, { useState } from 'react'

const AddUserForm = props => {

  // Set the initial state of the form as a variable so it can be reset after a submit.
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        // Prevent submitting empty name and/or username
        if (!user.name || !user.username) return
        // Submit the user and then reset the form.
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={ user.name }
        onChange={ handleInputChange }
      />
      <label>UserName</label>
      <input
        type="text"
        name="username"
        value={ user.username }
        onChange={ handleInputChange }
      />
      <button>Add New User</button>
    </form>
  )
}

export default AddUserForm