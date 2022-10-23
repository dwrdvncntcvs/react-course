import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided");
    }
  }

  toggleUserHandler = () => {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} num={3} />
        ))}
      </ul>
    );

    return (
      <ErrorBoundary>
        <div className={classes.users}>
          <button onClick={this.toggleUserHandler.bind(this)}>
            {this.state.showUsers ? "Hide" : "Show"} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
      </ErrorBoundary>
    );
  }
}

export default Users;
