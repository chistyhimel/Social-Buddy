import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import { Grid, Container } from "@material-ui/core";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Container>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Posts post={post} key={post.id}></Posts>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsContainer;
