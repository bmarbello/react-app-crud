import React from 'react';

const UserList = React.memo(({ users, deleteUser, editUser }) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => editUser(user)}>Editar</button>
              <button onClick={() => deleteUser(user.id)}>Eliminar</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sin usuarios registrados</td>
        </tr>
      )}
    </tbody>
  </table>
));

export default UserList;
