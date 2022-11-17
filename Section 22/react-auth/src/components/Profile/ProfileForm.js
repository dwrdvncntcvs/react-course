import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { FIREBASE_API_KEY } from "../../utils/variables";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const { token } = useAuth();
  const passwordRef = useRef();

  const submitData = async (e) => {
    e.preventDefault();

    const password = passwordRef.current.value;
    const data = {
      idToken: token,
      password,
      returnSecureToken: true,
    };

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        let errorMessage = "Authentication failed!";

        throw new Error(errorMessage);
      }

      const newData = await response.json();
      console.log(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitData}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
