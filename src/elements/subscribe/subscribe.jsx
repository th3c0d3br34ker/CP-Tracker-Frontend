import React, { Component } from "react";
import axios from "axios";

import { Container, Button, Row } from "react-bootstrap";

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
      <Container className="border-none bg-dark text-white">
        <div className="p-3 ">
          <Row className="justify-content-center text-center">
            <h2>Subscribe Newsletter</h2>
          </Row>
          <Row className="justify-content-center">
            <input
              id="emailBox"
              type="text"
              placeholder="Enter Your Email Address"
              size="40"
              defaultValue={this.state.email}
              onChange={this.handleChange}
            />
            <Button type="submit" variant="success" onClick={this.postEmail}>
              Submit
            </Button>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Subscribe;
