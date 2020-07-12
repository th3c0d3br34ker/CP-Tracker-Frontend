import React, { Component } from "react";
import axios from "axios";

import PostCard from "./postCard.jsx";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/postcard/")
      .then((response) => {
        // Temporary Workaround
        let posts = [];
        let post;
        let each;
        for (each of response.data) {
          let Info;
          Info = {
            heading: each.heading,
            alt: each.alt,
            image: each.image,
            text: each.text,
          };
          post = {
            id: each.id,
            cardInfo: Info,
          };

          posts.push(post);
        }
        this.setState({ posts: posts });
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
            <PostCard key={post.id} cardInfo={post.cardInfo} />
          ))}
        </div>
      </div>
    );
  }
}
export default Posts;
