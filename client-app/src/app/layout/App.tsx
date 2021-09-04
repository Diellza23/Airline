import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import PunetoriDashboard from "../../features/punetoret/dashboard/PunetoriDashboard";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import DetajetPunetori from "../../features/punetoret/detajet/DetajetPunetori";
import PunetoriForm from "../../features/punetoret/form/PunetoriForm";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import LoginForm from "../../features/users/LoginForm";
import ServerError from "../../features/errors/ServerError";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import ModalContainer from "../common/modals/ModalContainer";

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
                <Route path='/punetoret/:id' component={DetajetPunetori} /> //`
                <Route key={location.key} path={['/addPunetori', '/manage/:id']} component={PunetoriForm}/>                
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
