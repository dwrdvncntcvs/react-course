// import { Component } from "react";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
import {
  decrement,
  increase,
  increment,
  toggleCounter,
} from "../features/counterSlice";

const countState = (state) => state.counterState;

const Counter = () => {
  const { count, showCounter } = useSelector(countState);
  const dispatch = useDispatch();

  const incrementAction = () => {
    dispatch(increment());
  };

  const decrementAction = () => {
    dispatch(decrement());
  };

  const incrementByNumAction = (number) => {
    dispatch(increase(number));
  };

  const buttons = [
    { label: "Increment", action: incrementAction },
    { label: "Decrement", action: decrementAction },
    { label: "Increase", action: incrementByNumAction, number: 5 },
  ];

  const toggleCounterHandler = () => {
    dispatch(toggleCounter(!showCounter));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <div className={classes.value}>-- COUNTER VALUE: {count} --</div>
      )}
      <div>
        {buttons.map(({ label, action, number }, i) => (
          <button onClick={action.bind(null, number)} key={i}>
            {label} {number}
          </button>
        ))}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   buttons = [
//     { label: "Increment", action: this.incrementAction },
//     { label: "Decrement", action: this.decrementAction },
//     { label: "Increment", action: this.incrementByNumAction, number: 5 },
//   ];

//   incrementAction() {
//     this.props.incrementAction();
//   }

//   incrementByNumAction(number) {
//     this.props.incrementAction(number);
//   }

//   decrementAction() {
//     this.props.decrementAction();
//   }

//   toggleCounterHandler = () => {
//     this.props.toggleCounter(!this.props.showCounter);
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.showCounter && (
//           <div className={classes.value}>
//             -- COUNTER VALUE: {this.props.count} --
//           </div>
//         )}
//         <div>
//           {this.buttons.map(({ label, action, number }, i) => (
//             <button onClick={action.bind(this, number)} key={i}>
//               {label} {number}
//             </button>
//           ))}
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => ({ ...state });

// const mapDispatchToProps = (dispatch) => ({
//   incrementAction: (number = 1) => {
//     dispatch(increment(number));
//   },
//   decrementAction: (number = 1) => dispatch(decrement(number)),
//   toggleCounter: (boolVal = true) => dispatch(toggleCounter(boolVal)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
