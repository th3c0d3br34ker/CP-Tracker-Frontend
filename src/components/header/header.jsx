import { Container, Image } from "react-bootstrap";

import React from "react";

export default function Header() {
  return (
    <Container fluid={true} className="row header-div">
      <Image
        className="logo"
        src={require("../../assets/logo.webp")}
        alt="logo"
        width="40"
      />
      <h2 className="heading">{"CP-Tracks"}</h2>
    </Container>
  );
}

// TODO:
// - Modify to API Call.
// - Add user profile.
