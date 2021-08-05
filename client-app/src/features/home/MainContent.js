import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
 import Popper from './Popper';
 import Modaal from './Modaal';
import Revealing from './Revealing';
import { Message } from 'semantic-ui-react'
// import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    float:'right',
    // border:'1px solid black',
  },
  fullWidth: {
    width: '100%',
  },
}));
// function open() {
//   Notification.open({
//     title: 'Notify',
//     description: <Paragraph width={320} rows={3} />
//   });
// }

// const instance = (
//   <ButtonToolbar>
//     <Button onClick={open}> Open </Button>
//   </ButtonToolbar>
// );
// ReactDOM.render(instance);

function MainContent() {
  const classes = useStyles();
  return (
    <>
    {/* <Alert severity="info">
    <AlertTitle>Info</AlertTitle>
    This is an info alert — <strong>check it out!</strong>
  </Alert> */}
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
      </div>
      <div className={classes.content}>
        {/* <p style={{display:'flex',alignSelf:'center'}}>VEREJTJE!</p>
         */}
         <Message size='small' color='teal'>Verejtje</Message>
        <Revealing/>
      </div>
      <div style={{display:'flex'}}>
        {/* <Modaal/> */}
      </div>
      <Grid>
        <Popper/>
        
      </Grid>
    </main>
    </>
  );
  
}
export default MainContent;