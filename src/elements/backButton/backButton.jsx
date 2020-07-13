import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function BackButton() {
  const history = useHistory();
  return (
    <Button
      variant="success"
      className="mt-3"
      onClick={() => history.push("/")}
    >
      Back
    </Button>
  );
}
