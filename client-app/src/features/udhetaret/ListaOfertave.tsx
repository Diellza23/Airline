import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStore } from "../../app/stores/store";
import { Button, Icon, Image } from "semantic-ui-react";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      width: '80%',
      minHeight: 500,
      marginLeft: "-1%",
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
  const { ofertatByDate } = ofertaStore;

  return (
    <>
      <Icon
        className="arrow alternate circle left icon"
        as={NavLink}
        to="/udhetariProfile"
        style={{ marginLeft: "-57.7%", width: "269.2%",marginTop:"-205%",padding:"4% 12%" }}
      >
        Go back to your profile
      </Icon>

      <div
        style={{
          backgroundColor: "white",
          height: "102%",
          width: "280%",
          marginLeft: "-60%",
          paddingRight: "-10%",
          paddingTop:"6em"
        }}
      >
        <Image
          size="massive"
          src="/assets/sea.png"
          alt="logo"
          style={{
            width: "100%",
            height: "23%",
            // marginLeft: "-20px",
            marginTop: "-43px",
            // height:"700px"
          }}
        />

        <div
          className={classes.root}
          style={{
            backgroundColor: "white",
            width: "100%",
            marginLeft: "11.5%",
            marginTop: "900px",
            // marginBottom:"-700px"
          }}
        >
          <Paper elevation={5} className={classes.paper}>
            <Grid container spacing={2} style={{}}>
              <Grid item></Grid>
              {ofertatByDate.map((oferta) => (
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Vendi: {oferta.goingTo}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Klasa: {oferta.flightClass}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Data e nisjes:
                        {format(oferta.checkIn!, "dd MMM yyyy h:mm aa")}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Data e mberritjes
                        {format(oferta.checkOut!, "dd MMM yyyy h:mm aa")}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Personat:{oferta.persons}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        Cmimi:{oferta.cmimi}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button floated="right" content=" SALE" color="pink" />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </div>

        <div style={{ float: "left" }}>
          <div
            style={{
              backgroundColor: "#0770e3",
              width: "108%",
              height: "130px",
              marginTop: "-140%",
              marginLeft: "52%",
              marginRight: "50%",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                lineHeight: "1.5",
                fontSize: "30px",
                fontWeight: 700,
                color: "white",
                fontFamily: "sans-serif",
                marginLeft: "18.5%",
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

            <img
              src="/assets/first.png"
              style={{
                height: "85%",
                width: "15%",
                marginTop: "-6.7%",
                borderRadius: "5px",
                paddingBottom: "8px",
                marginLeft: "10px",
              }}
              alt="First Class Airplane Ticket"
            />

            <Button
              floated="right"
              content="See the full update->"
              style={{
                marginRight: "64.5%",
                marginTop: "0",
                color: "white",
                backgroundColor: "#0770e3",
              }}
            />
          </div>
        </div>

        <div
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
            width: "51%",
            height: "10.5%",
            marginTop: "-56%",
            marginLeft: "24.5%",
          }}
        >
          <img
            src="/assets/map.png"
            style={{ width: "420px", height: "90%", marginLeft: "57.3%" }}
            alt="Picture of a map"
          />
          <div
            style={{ marginLeft: "30px", marginTop: "-25%", width: "35%" }}
          >
            <p style={{ fontWeight: 700, fontSize: "25px", color: "black" }}>
              Get the COVID-19 travel info you need
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "17px",
                color: "black",
                marginTop: "30px",
              }}
            >
              Navigate live travel entry restrictions and bans, including the
              latest info for UK travellers. And sign up to get updates when
              things change.
            </p>
            <Button
              floated="left"
              content="View live map ->"
              style={{
                color: "white",
                backgroundColor: "#00a698",
                marginTop: "-28%",
                width: "160px",
                height: "35px",
                paddingTop: "10px",
              }}
            />
          </div>
          <div style={{marginLeft:"15%"}}>
            <p style={{color:"white",fontSize:"45px",marginTop:"-180%"}}>Let the journey begin</p>
            <p style={{color:"white",fontSize:"40px"}}>Book now.</p>
          </div>
        </div>
      </div>
    </>
  );
}
