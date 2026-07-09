import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Heading</h1>
      {users.map((user, key) => (
        <p key={key}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
