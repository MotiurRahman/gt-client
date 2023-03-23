import React, { useEffect, useState } from "react";
import User from "./User";

const Adduser = () => {
  const [users, setuser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json().then((data) => setuser(data))
    );
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

export default Adduser;
