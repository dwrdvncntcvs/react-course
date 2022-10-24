import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    name,
    nameReset,
    nameChangeHandler,
    nameBlurHandler,
    nameIsValid,
    nameIsNotValid,
  } = useInput("name", (name) => name.length > 0);

  const {
    email,
    emailReset,
    emailChangeHandler,
    emailBlurHandler,
    emailIsValid,
    emailIsNotValid,
  } = useInput("email", (email) => email.length > 0 && email.includes("@"));

  const inputFields = [
    {
      id: "name",
      type: "text",
      label: "Your name",
      value: name,
      isValid: !nameIsNotValid,
      change: nameChangeHandler,
      blur: nameBlurHandler,
      errorMessage: "Name must not be empty",
    },
    {
      id: "email",
      type: "email",
      label: "Your email",
      value: email,
      isValid: !emailIsNotValid,
      change: emailChangeHandler,
      blur: emailBlurHandler,
      errorMessage: "Invalid email address",
    },
  ];

  let formIsValid = true;

  if (nameIsValid && emailIsValid) formIsValid = true;
  else formIsValid = false;

  const submitFormAction = (e) => {
    e.preventDefault();

    nameReset(true);
    emailReset(true);

    if (!nameIsValid && !emailIsValid) return;

    const data = { name, email };
    console.log("Data: ", JSON.stringify(data));
    nameReset(false);
    emailReset(false);
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
