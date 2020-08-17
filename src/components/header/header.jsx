import React from "react";

import { Container, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Container fluid={true} className="row header-div">
      <Image
        className="logo"
        src={require("../../assets/logo.png")}
        alt="logo"
        width="40"
      />

      <h2>{"CP-Tracker"}</h2>
    </Container>
  );
}

// TODO:
// - Modify to API Call.
// - Add user profile.
