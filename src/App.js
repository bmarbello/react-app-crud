import './App.css';


import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>CRUD</h1>
      <div>
        <h2>{editing ? 'Editar usuario' : 'Añadir usuario'}</h2>
        <UserForm
          addUser={addUser}
          currentUser={currentUser}
          updateUser={updateUser}
          editing={editing}
        />
      </div>
      <div>
        <h2>Ver usuarios</h2>
        <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
    </div>
  );
};

export default App;

