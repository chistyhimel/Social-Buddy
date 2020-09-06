import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Comments.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  
    
    console.log(props.id)
  const { id, email, body, name,postId } = props.comment;
  const classes = useStyles(); 

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className="comment-container">
      
        <img src={`https://randomuser.me/api/portraits/men/${props.id}.jpg`} alt="" className="comment-img"/>
      
      <div>
      <Typography variant="h6">
          Comment : {id}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <strong>Email :</strong> {email}
        </Typography>
        <Typography variant="h5" component="h2">
          <strong>Name :</strong> {name}
        </Typography>
        <Typography variant="body2" component="p">
          <strong>Comment :</strong> {body}
        </Typography>
      </div>
      </CardContent>
    </Card>
  );
}
