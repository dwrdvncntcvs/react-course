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
  ];

  incrementAction() {
    this.props.increment();
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
          {this.buttons.map(({ label, action }, i) => (
            <button onClick={action.bind(this)} key={i}>
              {label}
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
  increment: () => {
    console.log("Dispatch");
    dispatch({ type: INCREMENT });
  },
  decrement: () => dispatch({ type: DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
