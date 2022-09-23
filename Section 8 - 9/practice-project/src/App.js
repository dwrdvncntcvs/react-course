import { useState } from "react";
import "./App.css";
import { AddUser, UserList } from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };

  return (
    <>
      <AddUser onAddUser={addNewUser} />
      <UserList users={users} />
    </>
  );
}

export default App;
