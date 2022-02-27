import React from "react";
import {createStyles, Paper, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles'

const userStyles = makeStyles({
    
})

export default function Chat() {
  const classes = userStyles();
  return <>
  <div className={classes.container}>
  <Paper className={classes.paper}>
    <Typography variant="h5">
      Heading
      <Paper className={classes.paper}>Heading 2</Paper>
    </Typography>
  </Paper>
  </div>
  </>
}
