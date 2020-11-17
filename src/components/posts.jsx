import { Fragment, useEffect, useState } from "react";

import { Container } from "@material-ui/core";
import PostCard from "./PostCard";

const Posts = ({ className }) => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const data = [
        {
          id: 1,
          heading: "Competitive Programming",
          image:
            "https://github.com/th3c0d3br34ker/CP-Tracker-Frontend/blob/master/images/cp.png?raw=1",
          alt: "Competitive Programming",
          text:
            "Get ready for the thrill ! A track for practising cp problems in a very structured way.",
          link: "/#/problem",
          created_at: "2020-08-25T16:45:53.016673Z",
        },
        {
          id: 2,
          heading: "Python Proficiency",
          image:
            "https://github.com/th3c0d3br34ker/CP-Tracker-Frontend/blob/master/images/python.jpg?raw=1",
          alt: "Python Programming",
          text:
            "Get Ready to learn one of the top 10 programming languages. Track for python language proficiency.",
          link: "/#/python",
          created_at: "2020-08-25T16:46:01.197077Z",
        },
        {
          id: 3,
          heading: "C++ Proficiency",
          image:
            "https://github.com/th3c0d3br34ker/CP-Tracker-Frontend/blob/master/images/cpp.jpg?raw=1",
          alt: "C++ Programming",
          text:
            "Get Ready to learn most recommended language to learn. Track for c++ language proficiency.",
          link: "/#/cpp",
          created_at: "2020-08-25T16:45:20.192787Z",
        },
        {
          id: 4,
          heading: "Java Proficiency",
          image:
            "https://github.com/th3c0d3br34ker/CP-Tracker-Frontend/blob/master/images/java.png?raw=1",
          alt: "Java Programming",
          text:
            "Get Ready to learn most used language in big tech companies. Track for Java Proficiency.",
          link: "/#/java",
          created_at: "2020-08-25T16:45:43.609523Z",
        },
      ];
      // await axios({
      //   method: "get",
      //   url: "/postcard",
      // }).catch((error) => {
      //   console.log("ERROR: ", error);
      // });

      setPost(data);
    };

    getPosts();
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container className={className}>
          {posts.map((post) => (
            <PostCard key={post.id} cardInfo={post} />
          ))}
        </Container>
      )}
    </Fragment>
  );
};

export default Posts;
