import { Component } from "react";
import style from "./userFinder.module.css";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  updatePerSearchTerm(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
  }

  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    this.updatePerSearchTerm(prevProps, prevState);
  }

  componentWillUnmount() {
    this.setState({ filteredUsers: [] });
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className={style.finder}>
        <input type="search" onChange={this.searchChangeHandler} />
        <Users users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default UserFinder;
