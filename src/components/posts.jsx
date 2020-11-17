import { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import PostCard from "./PostCard";
import axios from "../axios";

const Posts = ({ className }) => {
  const [posts, setPost] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/postcard/",
    })
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });

    //eslint-disable-next-line
  }, []);

  return (
    <Container className={className}>
      {posts.map((post, i) => (
        <PostCard key={i} loading={loading} cardInfo={post} />
      ))}
    </Container>
  );
};

export default Posts;
