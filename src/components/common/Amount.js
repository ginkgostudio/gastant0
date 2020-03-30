import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Amount() {
  const classes = useStyles();

  return (
      <TextField id="standard-basic" label="Amount" type="number" />
  );
}