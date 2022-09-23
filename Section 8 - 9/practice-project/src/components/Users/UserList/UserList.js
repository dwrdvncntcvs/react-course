import React from "react";
import style from "./userList.module.css";
import { Card } from "../../Layout";

const UserList = ({ users = [] }) => {
  return (
    <Card className={style.users}>
      {users.length < 1 ? (
        <p>No Users</p>
      ) : (
        <ul>
          {users.map(({ username, age, id }) => (
            <li key={id}>
              {username} ({age} years old.)
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UserList;
