import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, currentUser, updateUser, editing }) => {
  const [user, setUser] = useState({ id: null, name: '', email: '' });

  useEffect(() => {
    if (editing) {
      setUser(currentUser);
    }
  }, [editing, currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return;

    if (editing) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({ id: null, name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Correo</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <button>{editing ? 'Actualizar usuario' : 'Añadir usuario'}</button>
    </form>
  );
};

export default UserForm;
