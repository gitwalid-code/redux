import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div>
      <h1>User component</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
