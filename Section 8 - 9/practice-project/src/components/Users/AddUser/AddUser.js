import React, { Fragment, useRef, useState } from "react";
import { Button, Card, ErrorModal } from "../../Layout";
import style from "./addUser.module.css";

const DEFAULT = { username: "", age: "" };
const DEFAULT_ERROR = { value: false, message: "", title: "" };

const validate = (userData, setter) => {
  if (
    userData.username.trim().length === 0 ||
    userData.age.trim().length === 0
  ) {
    setter({
      value: true,
      message: "Please enter a username and age.",
      title: "Empty Fields Error",
    });
    return true;
  }

  if (+userData.age < 1) {
    setter({
      value: true,
      message: "Age could not be zero.",
      title: "Age Field Error",
    });
    return true;
  }

  return false;
};

const AddUser = ({ onAddUser }) => {
  // const [userData, setUserData] = useState(DEFAULT);
  const [error, setError] = useState(DEFAULT_ERROR);

  // const changeHandler = (e) => {
  //   const name = e.target.name;
  //   setUserData((prev) => ({ ...prev, [name]: e.target.value }));
  // };

  const nameRef = useRef();
  const ageRef = useRef();

  const addUserAction = (e) => {
    e.preventDefault();

    const user = {
      username: nameRef.current.value,
      age: ageRef.current.value,
    };

    const hasError = validate(user, setError);
    if (hasError) return;
    onAddUser(user);
    // setUserData(DEFAULT);

    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const closeModal = () => setError(DEFAULT_ERROR);

  const inputFields = [
    {
      label: "Username",
      type: "text",
      name: "username",
      ref: nameRef,
      // changeAction: changeHandler,
      // value: userData.username,
    },
    {
      label: "Age",
      type: "text",
      name: "age",
      ref: ageRef,
      // changeAction: changeHandler,
      // value: userData.age,
    },
  ];

  return (
    <>
      {error.value && (
        <ErrorModal
          message={error.message}
          title={error.title}
          onClose={closeModal}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserAction}>
          {inputFields.map(
            ({ label, type, name, value, changeAction, ref }) => (
              <Fragment key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  // value={value}
                  // onChange={changeAction}
                  ref={ref}
                />
              </Fragment>
            )
          )}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
