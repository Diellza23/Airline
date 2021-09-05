import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import PunetoriDashboard from "../../features/punetoret/dashboard/PunetoriDashboard";
import FluturimiDashboard from "../../features/fluturimet/dashboard/FluturimiDashboard";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import DetajetPunetori from "../../features/punetoret/detajet/DetajetPunetori";
import DetajetFluturimi from "../../features/fluturimet/detajet/DetajetFluturimi";
import PunetoriForm from "../../features/punetoret/form/PunetoriForm";
import FluturimiForm from "../../features/fluturimet/form/FluturimiForm";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import LoginForm from "../../features/users/LoginForm";
import ServerError from "../../features/errors/ServerError";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import ModalContainer from "../common/modals/ModalContainer";

import Profile from "../../features/punetoret/profile";

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app..'/>

  return (
      <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <ModalContainer/>
        <Route exact path="/" component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Switch>
                  <Route exact path="/punetoret" component={PunetoriDashboard} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/fluturimet" component={FluturimiDashboard} />
                <Route path='/punetoret/:id' component={DetajetPunetori} /> 
                <Route path='/fluturimet/:id' component={DetajetFluturimi} />
                <Route key={location.key} path={['/addPunetori', '/manage/:id']} component={PunetoriForm}/>                
                <Route key={location.key} path={['/addFluturimi', '/managee/:id']} component={FluturimiForm}/>                
                <Route path='/errors' component={TestErrors}/>
                <Route path='/server-error' component={ServerError} />
                <Route path='/login' component={LoginForm}/> 
                <Route component={NotFound}/>
                </Switch>
                
              </Container>
            </>
          )}
        />
      </>
    // </div>
  );
}

export default observer(App);
