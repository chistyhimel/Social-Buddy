import React from "react";
import "./Posts.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Card from "../Card/Card"

const Posts = (props) => {
  // console.log(props.post);
  
  return (
   
    <Grid item xs={12} sm={6} md={4}>
      <Card post={props.post}></Card>
    </Grid>
  );
};

export default Posts;
