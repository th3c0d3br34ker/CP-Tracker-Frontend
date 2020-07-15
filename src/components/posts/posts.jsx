import React, { Component } from "react";
import axios from "axios";

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
      <div className="container" id="practise">
        <div className="row justify-content-center">
          {this.state.posts.map((post) => (
            <PostCard key={post.id} cardInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}
export default Posts;
