import React, { Component } from "react";
import Axios from "axios";

import { Container } from "react-bootstrap";

import PostCard from "./postCard.jsx";
import Loading from "../../elements/loading/loading.jsx";

class Posts extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    window.scroll({
      top: 0,
    });

    this.setState({ isLoading: true }, () => {
      Axios.get("https://cp-tracker.herokuapp.com/api/postcard/")
        .then((response) => {
          this.setState({ posts: response.data, isLoading: false });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    return (
      <Container id="practise">
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="row practice-container-div">
            {this.state.posts.map((post) => (
              <PostCard key={post.id} cardInfo={post} />
            ))}
          </div>
        )}
      </Container>
    );
  }
}
export default Posts;
