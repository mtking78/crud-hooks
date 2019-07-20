import React, { useState }from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {

  // Sample data
  const usersData = [
    { id: 1, name: 'Alfred', username: 'alBot3000' },
    { id: 2, name: 'Barry', username: 'bozo123' },
    { id: 3, name: 'Charlie', username: 'chuckTesta' },
    { id: 4, name: 'Doug', username: 'turboDoug' }
  ]

  const [users, setUsers] = useState(usersData)

  // Take the 'user' object as a parameter and add onto the users array of objects.
  // '...users' ensures all the previous users remain in the array.
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={ addUser } />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={ users } />
        </div>
      </div>
    </div>
  );
}

export default App;
