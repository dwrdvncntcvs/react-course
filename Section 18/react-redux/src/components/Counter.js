import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../variables";

const countState = (state) => state;

const Counter = () => {
  const { count } = useSelector(countState);
  const dispatch = useDispatch();

  const incrementAction = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementAction = () => {
    dispatch({ type: DECREMENT });
  };

  const buttons = [
    { label: "Increment", action: incrementAction },
    { label: "Decrement", action: decrementAction },
  ];

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE: {count} --</div>
      <div>
        {buttons.map(({ label, action }) => (
          <button onClick={action}>{label}</button>
        ))}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
