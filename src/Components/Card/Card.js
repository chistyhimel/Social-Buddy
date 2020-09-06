import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Card.css";
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

export default function OutlinedCard(props) {
  // console.log(props.post);
  const { userId, id, title, body } = props.post;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <img
          src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
          alt=""
          className="card-img"
        />

        <Typography variant="h5" component="h2">
          Title : {title}
        </Typography>

        <Typography variant="body2" component="p">
          Post : {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/post/${id}`} className={classes.linkStyle}>
          <Button>See More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
