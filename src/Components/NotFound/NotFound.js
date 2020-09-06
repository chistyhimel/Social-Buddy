import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Alert severity="error">
          <AlertTitle><strong>Error</strong></AlertTitle>
          <h1>404 — <strong>Page not found!!!</strong></h1>
        </Alert>
      </div> 
    );
};

export default NotFound;