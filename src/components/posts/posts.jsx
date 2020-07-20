import React, { Component } from "react";
import axios from "axios";

import { Container } from "react-bootstrap";

import PostCard from "./postCard.jsx";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://cp-track.herokuapp.com/api/postcard/")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container id="practise">
        <div className="row practice-container-div">
          {this.state.posts.map((post) => (
            <PostCard key={post.id} cardInfo={post} />
          ))}
        </div>
      </Container>
    );
  }
}
export default Posts;
