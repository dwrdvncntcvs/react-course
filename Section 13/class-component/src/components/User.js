import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  render() {
    let { num } = this.props;
    num += 5;

    return (
      <li className={classes.user}>
        {this.props.name} {num}
      </li>
    );
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
