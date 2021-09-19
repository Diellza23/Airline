import { observer } from "mobx-react-lite";
import { userInfo } from "os";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import udhetariStore from "../../app/stores/udhetariStore";
import UdhetariStore from "../../app/stores/udhetariStore";
import LoginFormUdhetari from "../udhetaret/form/LoginFormUdhetari";
import RegisterFormUdhetari from "../udhetaret/form/RegisterFormUdhetari";
// import LoginFormUdhetari from '../udhetaret/form/LoginFormUdhetari';
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

export default observer(function HomePage() {
  const { userStore, modalStore, udhetariStore } = useStore();
  return (
    <>
      <div
        style={{
          marginTop: "0",
          backgroundColor: "#28282a",
          height: "65px",
          display: "flex",
          justifyContent: "flex-end",
          fontWeight: 700,
        }}
      >
        <h3
          style={{
            color: "white",
            marginTop: "20px",
            marginRight: "395px",
            fontSize: "20px",
            fontFamily: "Roboto Condensed ,sans-serif",
            textTransform:"uppercase"
          }}
        >
          oneair
        </h3>

        {udhetariStore.isLoggedIn ? (
          <>
            <Header as="h2" content="Welcome to Airlines" />
          </>
        ) : (
          <>
            <Button
              onClick={() => modalStore.openModal(<LoginFormUdhetari />)}
              size="huge"
              style={{
                color: "white",
                backgroundColor: "#28282a",
                textTransform: "uppercase",
                fontFamily: "Roboto Condensed, sans-serif",
                fontSize: "14px",
                marginRight: "-15px",
              }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => modalStore.openModal(<RegisterFormUdhetari />)}
              size="huge"
              style={{
                color: "#ff3366",
                backgroundColor: "#28282a",
                textTransform: "uppercase",
                fontFamily: "Roboto Condensed, sans-serif",
                fontSize: "14px",
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
      <Segment style={{paddingBottom:"0em",paddingTop:"2em",}}>
        <div style={{ marginTop: "-29px" }}>
          <Image
            size="massive"
            src="/assets/air.png"
            alt="logo"
            style={{
              minWidth: "1250px",
              marginLeft: "-20px",
              marginTop:"-43px"
              // height:"700px"
            }}
          />
        </div>
        <Container text style={{ marginTop: "-450px", }}>
         
          {userStore.isLoggedIn ? (
            <>
              <Header as="h2" content="Welcome to Airlines" />
              <Button as={Link} to="/punetoret" size="huge" inverted style={{}}>
                You may go on
              </Button>
            </>
          ) : (
            <>
              <p
                style={{
                  color: "white",
                  fontSize: "40px",
                  textTransform: "uppercase",
                  fontFamily: "Roboto Condensed, sans-serif",
                  marginTop: "-690px",
                  marginLeft: "120px",
                  paddingBottom: "60px",
                  letterSpacing:"-1.5px",
                  
                }}
              >
                Upgrade your flights
              </p>
              <span
                style={{
                  width: "73px",
                  height: "4px",
                  margin: "8px auto 0",
                  display: "block",
                  backgroundColor: "#ff3366",
                  marginTop:"-90px"
                }}
              ></span>

              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Work sans,sans-serif",
                  paddingBottom: "30px",
                  marginLeft: "50px",
                  marginTop:"60px"
                }}
              >
                Enjoy secret offers up to -70% off the best luxury hotels every
                Sunday.
              </p>

              <Button
                onClick={() => modalStore.openModal(<LoginForm />)}
                size="huge"
                style={{
                  color: "white",
                  backgroundColor: "#FF3366",
                  width: "180px",
                  borderRadius: "0px",
                  height: "55px",
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontSize: "13px",
                  marginLeft: "260px",
                  marginTop: "-100px",
                  letterSpacing:"1px"
                }}
              >
                ADMIN
              </Button>
              <h3
                style={{
                  color: "white",
                  marginLeft: "280px",
                  fontSize: "13px",
                  fontFamily:"work sans,sans-serif"
                  
                }}
              >
                Discover the experience
              </h3>
              <div style={{backgroundColor:"rgba(192,192,192,0.3)",width:"1270px",height:"140px",
              marginLeft:"-300px",marginTop:"258px",
              }}>
                <p style={{fontWeight:"bolder",color:"orange",marginLeft:"100px"}}>About us</p>
              </div>
            </>
          )}
        </Container>
      </Segment>
    </>
  );
});
