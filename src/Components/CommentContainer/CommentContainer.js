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


 
  return (
    <div>
      <Typography variant="h5" component="h6">Comment Section :</Typography>
      {comments.map((comment,idx) =>(
         <Comments comment={comment} key={idx} id={idx}></Comments>
      ))}
    </div>
  );
};

export default CommentContainer;
