import React, { useState }from 'react';
import './App.css';
import UserTable from './tables/UserTable';

const App = () => {

  // Sample data
  const usersData = [
    { id: 1, name: 'Alfred', username: 'alBot3000' },
    { id: 2, name: 'Barry', username: 'bozo123' },
    { id: 3, name: 'Charlie', username: 'chuckTesta' },
    { id: 4, name: 'Doug', username: 'turboDoug' }
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={ users }/>
        </div>
      </div>
    </div>
  );
}

export default App;
