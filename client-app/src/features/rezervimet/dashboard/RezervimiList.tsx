import React, { SyntheticEvent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useStore } from '../../../app/stores/store';
import { Button } from 'semantic-ui-react';
import { format } from 'date-fns';
// import { useStore } from '../../../app/stores/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

export default function RezervimiList() {
  const classes = useStyles();
  const { rezervimiStore } = useStore();
  const { deleteRezervimi, rezervimetByDate, loading } = rezervimiStore;

  const [target, setTarget] = useState("");

  function handleRezervimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteRezervimi(id);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/assets/user.png" />
            </ButtonBase>
          </Grid>
          {rezervimetByDate.map((rezervimi) => (
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {rezervimi.vendi_Nisjes}

                </Typography>
                <Typography variant="body2" gutterBottom>
                  {rezervimi.vendi_Mberritjes}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {format(rezervimi.departure!, "dd MMM yyyy h:mm aa")}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {format(rezervimi.return!, "dd MMM yyyy h:mm aa")}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {rezervimi.personat}
                </Typography>
              </Grid>
              <Grid item>
              <Button
                  name={rezervimi.id}
                  loading={loading && target === rezervimi.id}
                  onClick={(e) => handleRezervimiDelete(e, rezervimi.id)}
                  floated="right"
                  content="REZERVO"
                  color="pink"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{rezervimi.cmimi}</Typography>
            </Grid>
          </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}