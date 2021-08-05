import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import PunetoriDashboard from "../../features/punetoret/dashboard/PunetoriDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import DetajetPunetori from "../../features/punetoret/detajet/DetajetPunetori";
import PunetoriForm from "../../features/punetoret/form/PunetoriForm";

function App() {
  const location = useLocation();

  return (
    // <div
    //   style={{
    //     backgroundImage: `url("https://i.pinimg.com/originals/31/c3/42/31c34292f9f47c3dcf4b73cb5c5fa808.jpg")`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     marginTop: -50
    //   }}
    // >
      <>
        <Route exact path="/" component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Route exact path="/punetoret" component={PunetoriDashboard} />
                <Route path="/punetoret/:id" component={DetajetPunetori} />
                <Route
                  key={location.key}
                  path={["/addPunetori", "/manage/:id"]}
                  component={PunetoriForm}
                />
              </Container>
            </>
          )}
        />
      </>
    // </div>
  );
}

export default observer(App);
