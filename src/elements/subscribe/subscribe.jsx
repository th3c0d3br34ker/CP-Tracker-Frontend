import React, { Component } from "react";
import axios from "axios";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.postEmail = this.postEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    email: "",
  };

  postEmail() {
    const body = {
      email: this.state.email,
    };
    console.log(body);
    axios({
      method: "POST",
      url: "https://cp-track.herokuapp.com/api/subscribers/",
      data: body,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    return (
      <div className="text-white pt-3 text-center">
        <h2 className="d-inline-flex">Subscribe Newsletter</h2>
        <form>
          <input
            className="p-2"
            id="emailBox"
            type="text"
            placeholder="Enter Your Email Address"
            size="40"
            defaultValue={this.state.email}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={this.postEmail}
            className="btn btn-success"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Subscribe;
