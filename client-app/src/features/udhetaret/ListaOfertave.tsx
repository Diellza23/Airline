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
    <div style={{backgroundColor:"white",width:"1240px",height:"1300px",marginLeft:"-50px",marginBottom:"0"}}>
      <div>
        <img
          alt="complex"
          src="/assets/discount.png"
          style={{ width: "1240px", marginLeft: "-55px", height: "500px" }}
        />
      </div>
      <div
        className={classes.root}
        style={{
          backgroundColor: "white",
          width: "800px",
          marginLeft: "400px",
          marginTop: "1000px",
          // marginBottom:"-700px"
        }}
      >
        <Paper className={classes.paper}>
          <Grid container spacing={2} style={{}}>
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
      <div
        className="ui two column grid"
        style={{ float: "right", marginTop: "-213px" }}
      >
        <div
          className="column"
          style={{ marginRight: "200px", marginTop: "-650px", width: "550px" }}
        >
          <div
            className="ui raised segment"
            style={{
              backgroundColor: "#0770e3",
              width: "950px",
              height: "130px",
              marginLeft: "-390px",
              marginTop:"-500px"
            }}
          >
            {/* <a className="ui yellow ribbon label">Don't miss it</a> */}
            <span
              style={{
                lineHeight: "1.5",
                fontSize: "30px",
                marginBottom: ".5rem!important",
                fontWeight: 700,
                color: "white",
                fontFamily: "sans-serif",
                marginLeft:"170px"
              }}
            >
              Travel gets easier
            </span>
            <p
              style={{ fontSize: "13px", color: "white", marginLeft: "175px" }}
            >
              Fully vaccinated? From 4 October you won't need a pre-departure
              test before returning from your country from a non-red country.
            </p>

            <img src="/assets/first.png" style={{width:"150px",marginTop:"-75px",borderRadius:"3px"}}/>
            
            <Button
              floated="right"
              content="See the full update->"
              style={{
                marginRight: "595px",
                marginTop: "-10px",
                color: "white",
                backgroundColor: "#0770e3",
              }}
            />
            
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"whitesmoke",borderRadius:"10px" ,width: "950px", height: "340px", marginTop: "-1150px",marginLeft:"130px" }}>
          <img
            src="/assets/map.png"
            style={{ width: "420px", height: "300px",marginLeft:"530px" }}
          />
          <div style={{marginLeft: "30px",marginTop:"-280px",width:"350px", }}>
            <p style={{fontWeight:700,fontSize:"25px",color: "black"}}>Get the COVID-19 travel info you need</p>
            <p style={{fontWeight:400,fontSize:"17px",color: "black",marginTop:"40px",}}>Navigate live travel entry restrictions and bans, including the latest info for UK travellers. And sign up to get updates when things change.</p>
            <Button
              floated="left"
              content="View live map ->"
              style={{
                color: "white",
                backgroundColor: "#00a698",
                marginTop:"300px",
                width:"160px",
                height:"35px",
                paddingTop:"10px",
              }}
            />
          </div>
        </div></div>
    </>
  );
}
