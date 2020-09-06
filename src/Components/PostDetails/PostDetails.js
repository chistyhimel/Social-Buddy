import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import CommentContainer from "../CommentContainer/CommentContainer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  const { userId, id, title, body } = post;

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Container>
      {/* <Card>
      <CardContent>
      <h2>User id : {id}</h2>
      <h3>Title : {title}</h3>
      <p>{body}</p>
      
      </CardContent>
      
      </Card> */}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Post Id : {id}
          </Typography>
          <Typography variant="h5" component="h2">
            Title : {title}
          </Typography>
          <Typography variant="body2" component="p">
          Post : {body}
          </Typography>
        </CardContent>
        
      </Card>


      <Grid item xs={12} variant="outlined">
        <Card spacing={4}>
          <CommentContainer userId={postId}></CommentContainer>
        </Card>
      </Grid>
    </Container>
  );
};

export default PostDetails;
