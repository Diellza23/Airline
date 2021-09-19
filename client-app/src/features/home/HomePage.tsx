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
      <Segment>
        <div style={{ marginTop: "-29px" }}>
          <Image
            size="massive"
            src="/assets/airline.png"
            alt="logo"
            style={{
              minWidth: "1250px",
              marginLeft: "-20px",
            }}
          />
        </div>
        <Container text style={{ marginTop: "-450px" }}>
          {/* <Header as="h1">Airline</Header> */}
          {userStore.isLoggedIn ? (
            <>
              <Header as="h2" content="Welcome to Airlines" />
              <Button as={Link} to="/punetoret" size="huge" inverted style={{}}>
                You may go on
              </Button>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: "white",
                  fontSize: "40px",
                  textTransform: "uppercase",
                  fontFamily: "Roboto Condensed, sans-serif",
                  marginTop: "-670px",
                  marginLeft: "120px",
                  paddingBottom: "60px",
                  letterSpacing:"-1.5px"
                }}
              >
                Upgrade your flights
              </h3>
              <span
                style={{
                  width: "73px",
                  height: "4px",
                  margin: "8px auto 0",
                  display: "block",
                  backgroundColor: "#ff3366",
                  marginTop:"-60px"
                }}
              ></span>

              <h3
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Roboto Condensed sans-serif",
                  paddingBottom: "30px",
                  marginLeft: "50px",
                  marginTop:"70px"
                }}
              >
                Enjoy secret offers up to -70% off the best luxury hotels every
                Sunday.
              </h3>

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
                  
                }}
              >
                Discover the experience
              </h3>
            </>
          )}
        </Container>
      </Segment>
    </>
  );
});
