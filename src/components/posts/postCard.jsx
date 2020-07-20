import React from "react";

import { Card, Button } from "react-bootstrap";

export default function PostCard({ cardInfo }) {
  return (
    <Card className="postcard">
      <Card.Img
        src={cardInfo.image}
        alt={cardInfo.alt}
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title>{cardInfo.heading}</Card.Title>
        <Card.Text> {cardInfo.text}</Card.Text>
        <Button href={cardInfo.link} variant="success">
          Practice
        </Button>
      </Card.Body>
    </Card>
  );
}
