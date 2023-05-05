import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <>
      {users?.map((data, id) => {
        return (
          <div key={id}>
            <User data={data} />
          </div>
        );
      })}
    </>
  );
};

export default Users;
