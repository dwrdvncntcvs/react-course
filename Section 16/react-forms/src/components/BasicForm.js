import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    firstName,
    firstNameReset,
    firstNameChangeHandler,
    firstNameBlurHandler,
    firstNameIsValid,
    firstNameIsNotValid,
  } = useInput("firstName", (firstName) => firstName.length > 0);
  const {
    lastName,
    lastNameReset,
    lastNameChangeHandler,
    lastNameBlurHandler,
    lastNameIsValid,
    lastNameIsNotValid,
  } = useInput("lastName", (lastName) => lastName.length > 0);
  const {
    email,
    emailReset,
    emailChangeHandler,
    emailBlurHandler,
    emailIsValid,
    emailIsNotValid,
  } = useInput("email", (email) => email.length > 0 && email.includes("@"));

  const valuesTouched = (value) => {
    firstNameReset(value);
    lastNameReset(value);
    emailReset(value);
  };

  const submitAction = (e) => {
    e.preventDefault();

    valuesTouched(true);
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
    };

    console.log("Data: ", data);
    valuesTouched(false);
  };

  return (
    <form onSubmit={submitAction}>
      <div className="control-group">
        <div
          className={
            !firstNameIsNotValid ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsNotValid && (
            <p className="error-text">Invalid first name</p>
          )}
        </div>
        <div
          className={
            !lastNameIsNotValid ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsNotValid && (
            <p className="error-text">Invalid last name</p>
          )}
        </div>
      </div>
      <div
        className={!emailIsNotValid ? "form-control" : "form-control invalid"}
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsNotValid && <p className="error-text">Invalid email address</p>}
      </div>
      <div className="form-actions">
        <button
          type="submit"
          disabled={!firstNameIsValid && !lastNameIsValid && !emailIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
