import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.length > 0;
  const nameIsNotValid = !nameIsValid && nameTouched;

  const emailIsValid = email.length > 0 && email.includes("@");
  const emailIsNotValid = !emailIsValid && emailTouched;

  const inputFields = [
    {
      id: "name",
      type: "text",
      label: "Your name",
      value: name,
      isValid: !nameIsNotValid,
      change: (e) => {
        setName(e.target.value);
      },
      blur: (e) => {
        setNameTouched(true);
      },
      errorMessage: "Name must not be empty",
    },
    {
      id: "email",
      type: "email",
      label: "Your email",
      value: email,
      isValid: !emailIsNotValid,
      change: (e) => {
        setEmail(e.target.value);
      },
      blur: (e) => {
        setEmailTouched(true);
      },
      errorMessage: "Invalid email address",
    },
  ];

  let formIsValid = true;

  if (nameIsValid && emailIsValid) formIsValid = true;
  else formIsValid = false;

  const submitFormAction = (e) => {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!nameIsValid && !emailIsValid) return;

    const data = { name, email };
    console.log("Data: ", JSON.stringify(data));
    setNameTouched(false);
    setEmailTouched(false);
  };

  return (
    <form onSubmit={submitFormAction}>
      {inputFields.map(
        ({ change, blur, isValid, label, type, value, id, errorMessage }) => (
          <div
            className={isValid ? "form-control" : "form-control invalid"}
            key={id}
          >
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={value}
              onChange={change}
              onBlur={blur}
            />
            {!isValid && <p className="error-text">{errorMessage}</p>}
          </div>
        )
      )}

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
