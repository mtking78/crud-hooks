import React, { useState }from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import UpdateUserForm from './forms/UpdateUserForm';

const App = () => {

  // ***** Sample data *****
  const usersData = [
    { id: 1, name: 'Alfred', username: 'alBot3000' },
    { id: 2, name: 'Barry', username: 'bozo123' },
    { id: 3, name: 'Charlie', username: 'chuckTesta' },
    { id: 4, name: 'Doug', username: 'turboDoug' }
  ]

  const initialFormState = { id: null, name: '', username: '' }

  // ***** Setting the state *****
  const [users, setUsers] = useState(usersData)
  // Make a state for edit mode, begin as false.
  const [editing, setEditing] =useState(false)
  // Take id of chosen user and apply to currentUser state.
  const [currentUser, setCurrentUser] = useState(initialFormState)

  // ***** CRUD operations *****

  // Take the 'user' object as a parameter and add onto the users array of objects.
  // '...users' ensures all the previous users remain in the array.
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // Map through the users to find matching id.
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // Turn on editing mode, set currentUser so it can be used in UpdateUserForm props.
  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {/* Ternary operator to either show the add or edit user div. */}
          {editing ? (
            <div>
              <h2>Update User</h2>
              <UpdateUserForm
                // Pass all functions to the editing component.
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={ addUser } />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable
            users={ users }
            editRow={ editRow }
            deleteUser={ deleteUser }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
