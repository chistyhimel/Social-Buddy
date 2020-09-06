import React, { useState, useEffect } from "react";
import Comments from "../Comments/Comments";
import { Typography } from "@material-ui/core";

const CommentContainer = (props) => {
  // console.log(props.userId)
  const id = props.userId;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <Typography><h3>Comment Section :</h3></Typography>
      {comments.map((comment) => (
        <Comments comment={comment} photos={photos}></Comments>
      ))}
    </div>
  );
};

export default CommentContainer;
