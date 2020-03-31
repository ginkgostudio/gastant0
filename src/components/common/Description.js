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

export default function Description(props) {
  const classes = useStyles();

  return (
      <TextField id="standard-basic" label="Description" multiline onChange={(e) => props.handleChange(e.target.value)}/>
  );
}