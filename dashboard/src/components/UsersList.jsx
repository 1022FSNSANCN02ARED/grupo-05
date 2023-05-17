import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result.data);
        console.log("[USERS LIST] Cambió el estado");
      });
  };

  const deleteUser = (user) => {
    fetch(`http://localhost:3001/api/users/delete/${user.id}`, {
      method: "delete",
    }).then(() => {
      fetchAllUsers();
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Ver / Borrar</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <div className="w-100 flex">
            <span className="loader"></span>
          </div>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <button className="btn text-dark">
                    <i className="fas fa-eye"></i>
                  </button>
                </Link>
                <button className="btn text-danger" onClick={() => deleteUser(user)}>
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UsersList;
