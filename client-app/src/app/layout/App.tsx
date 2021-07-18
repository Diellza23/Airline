import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import NotaDashboard from "../../features/notat/dashboard/NotaDashboard";
import KonsultimeDashboard from "../../features/konsultimet/dashboard/KonsultimeDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import NotaForm from "../../features/notat/form/NotaForm";
import DetajetNota from "../../features/notat/detajet/DetajetNota";
import KonsultimeForm from "../../features/konsultimet/form/KonsultimeForm";
import DetajetKonsultime from "../../features/konsultimet/detajet/DetajetKonsultime";

function App() {
  const location = useLocation();

  return (
    <>
    <Route exact path="/" component={HomePage} />
    <Route
      path={'/(.+)'}
      render={() => (
        <>
        <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/notat" component={NotaDashboard} />
        <Route path="/notat/:id" component={DetajetNota} /> 
        <Route key={location.key} path={['/addNota', '/manage/:id']} component={NotaForm} />
      </Container>

      {/* <Container>
        <Route exact path="/konsultimet" component={KonsultimeDashboard} />
        <Route path="/konsultimet/:id" component={DetajetKonsultime} /> 
        <Route key={location.key} path={["/addKonsultime", '/manage/:id']} component={KonsultimeForm} /> 
      </Container> */}
        </>
      )}
      />
    </>
  );
}

export default observer(App);
