import React, { Component } from "react";

import Image from "react-bootstrap/Image";

import Login from "../../elements/loginSignup/loginSignup.jsx";

class Header extends Component {
  state = {
    username: "username",
  };

  render() {
    function LoggedIn(props) {
      if (props.username !== "username") {
        return <div className="username">{props.username}</div>;
      }
      return <Login />;
    }
    return (
      <div className="header">
        <div className="logo">
          <Image src={require("../../assets/logo.png")} alt="logo" width="40" />
        </div>
        <h2>Competitive Programming </h2>
        <LoggedIn username={this.state.username} />
      </div>
    );
  }
}

export default Header;

// TODO:
// - Modify to API Call.
// - Add user profile.
