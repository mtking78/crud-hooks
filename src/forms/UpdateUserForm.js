import React, { useState, useEffect } from 'react'

const UpdateUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
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
      <button>Update User</button>
      {/* Set editing back to false, clear the form */}
      <button
        className="button muted-button"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  )
}

export default UpdateUserForm