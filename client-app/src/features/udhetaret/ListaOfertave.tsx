import React, { SyntheticEvent, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useStore } from "../../app/stores/store";
import { Button } from "semantic-ui-react";
import { format } from "date-fns";
import OfertaStore from "../../app/stores/ofertaStore";
// import "./listaOfertave.css";
// import "./script.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

export default function ListaOfertave() {
  const classes = useStyles();
  const { ofertaStore } = useStore();
  const { deleteOferta, ofertatByDate, loading } = ofertaStore;

  return (
    <>
      <div>
        <img
          alt="complex"
          src="/assets/discount.png"
          style={{ width: "1240px", marginLeft: "-55px", height: "500px" }}
        />
      </div>
      <div className={classes.root} style={{}}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="/assets/book.png"
                />
              </ButtonBase>
            </Grid>
            {ofertatByDate.map((oferta) => (
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {oferta.goingTo}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {oferta.flightClass}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {format(oferta.checkIn!, "dd MMM yyyy h:mm aa")}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {format(oferta.checkOut!, "dd MMM yyyy h:mm aa")}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {oferta.persons}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button floated="right" content="BIG SALE" color="pink" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{oferta.cmimi}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>

    </>
  );
}
