import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CommentContainer from "../CommentContainer/CommentContainer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, Button } from "@material-ui/core";
import "./PostDetails.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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
  const { id, title, body } = post;

  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root} variant="outlined">
        <Link to="/home">
          <Button>
            {" "}
            <ArrowBackIosIcon></ArrowBackIosIcon> Go back
          </Button>
        </Link>

        <CardContent>
          <img
            src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
            alt=""
            className="post-img"
          />

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
