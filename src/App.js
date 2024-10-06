import './App.css';


import React, { useState, useMemo, useCallback, Suspense, useContext } from 'react';
import UserForm from './components/UserForm';
// Lazy load del componente UserList
const UserList = React.lazy(() => import('./components/UserList'));

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

  // Calcular el número de usuarios usando useMemo
  const userCount = useMemo(() => {
    console.log("Calculando el número de usuarios...");
    return users.length;
  }, [users]);

  // Funciones optimizadas con useCallback
  const addUser = useCallback((user) => {
    user.id = users.length + 1;
    setUsers((prevUsers) => [...prevUsers, user]);
  }, [users]);

  const deleteUser = useCallback((id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }, [users]);

  const editUser = useCallback((user) => {
    setEditing(true);
    setCurrentUser(user);
  }, []);

  const updateUser = useCallback((updatedUser) => {
    setUsers((prevUsers) => prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditing(false);
  }, []);


  return (
    <div className="container">
      <h1>CRUD</h1>
      <p>Usuarios registrados: {userCount}</p>
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
        <Suspense fallback={<div>Loading User List...</div>}>
          <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;

