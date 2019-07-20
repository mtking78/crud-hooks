import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* If there are are users, map through the array into the table */}
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={ user.id }>
          <td>{ user.name }</td>
          <td>{ user.username }</td>
          <td>
            <button
              className="button muted-button"
              onClick={() => props.editRow(user)}
            >
              Edit
            </button>
            <button
              className="button muted-button"
              onClick={() => props.deleteUser(user.id)}
            >
              Delete
            </button>
          </td>
        </tr>
        ))
        // If no users, display this info
        ) : (
          <tr>
            <td colSpan={3}>No Users</td>
          </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
