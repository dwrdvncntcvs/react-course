import { Component } from "react";
import classes from "./Counter.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { DECREMENT, INCREMENT } from "../variables";

// const countState = (state) => state;

// const Counter = () => {
//   const { count } = useSelector(countState);
//   const dispatch = useDispatch();

//   const incrementAction = () => {
//     dispatch({ type: INCREMENT });
//   };

//   const decrementAction = () => {
//     dispatch({ type: DECREMENT });
//   };

//   const buttons = [
//     { label: "Increment", action: incrementAction },
//     { label: "Decrement", action: decrementAction },
//   ];

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>-- COUNTER VALUE: {count} --</div>
//       <div>
//         {buttons.map(({ label, action }) => (
//           <button onClick={action}>{label}</button>
//         ))}
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  buttons = [
    { label: "Increment", action: this.incrementAction },
    { label: "Decrement", action: this.decrementAction },
    { label: "Increment", action: this.incrementByNumAction, number: 5 },
  ];

  incrementAction() {
    this.props.increment();
  }

  incrementByNumAction(number) {
    this.props.increment(number);
  }

  decrementAction() {
    this.props.decrement();
  }

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>
          -- COUNTER VALUE: {this.props.count} --
        </div>
        <div>
          {this.buttons.map(({ label, action, number }, i) => (
            <button onClick={action.bind(this, number)} key={i}>
              {label} {number}
            </button>
          ))}
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  increment: (number = 1) => {
    dispatch({ type: INCREMENT, payload: number });
  },
  decrement: (number = 1) => dispatch({ type: DECREMENT, payload: number }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
