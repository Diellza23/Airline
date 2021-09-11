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
// import NavBarUdhetari from "../../featuresUdhetari/NavBarUdhetari";
// import UdhetariPage from "../../featuresUdhetari/UdhetariPage";
// import UdhetariDashboard from "../../features/udhetaret/dashboard/UdhetariDashboard";
// import UdhetariDetails from "../../features/udhetaretAdmin/details/UdhetariDetails";
// import UdhetariList from "../../features/udhetaret/dashboard/UdhetariList";
import LoginFormUdhetari from "../../features/udhetaret/form/LoginFormUdhetari";
import UdhetariNavBar from "../../features/udhetaret/UdhetariNavBar";
import UdhetariProfile from "../../features/udhetaret/UdhetariProfile";
// import ProfileUdhetari from "../../features/udhetaret/profileUdhetari";

function App() {
  const location = useLocation();
  const {commonStore, userStore, udhetariStore} = useStore();

  commonStore.setAppLoaded();
  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  commonStore.setAppLoaded();
  useEffect(() => {
    if(commonStore.token) {
      udhetariStore.getUdhetari().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, udhetariStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app..'/>

  return (
      <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <ModalContainer/>
        <Route exact path="/" component={HomePage} />

        <Route path={"/(.+)"} render={() => (
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
                {/* <Route path='/errors' component={TestErrors}/> */}
                {/* <Route path='/server-error' component={ServerError} /> */}
                <Route path='/login' component={LoginForm}/> 
                {/* <Route component={NotFound}/> */}
                </Switch>
                
              </Container>
              <Switch></Switch>
            </>
          )}
        />
        {/* <Route path={"/udhetariPage/(.+)"} render={() => ( */}
            <>
              {/* <UdhetariNavBar /> */}
            
                <Switch>    
                  {/* <Route exact path="/udhetariProfile" component={UdhetariProfile} /> */}
                  <Route path="/udhetariProfile" component={UdhetariProfile} />
                {/* <Route path='/loginUdhetari' component={LoginFormUdhetari}/>  */}
                </Switch>
                
            </>
          {/* )} */}
        {/* /> */}

      {/* <Route path="/udhetariPage" component={UdhetariPage} />
      <Route
        path={"/udhetariPage/(.+)"}
        render={() => (
          <>
            <NavBarUdhetari />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                
                <Route
                  path="/nxenesiPage/njoftimet/"
                  component={DashboardNjoftimi}
                />
                <Route
                  path="/nxenesiPage/librat/"
                  component={DashboardLibri}
                />
                <Route
                  path="/nxenesiPage/feedbacks"
                  component={NxenesiFeedbacks}
                />
                <Route
                  path="/nxenesiPage/oraret"
                  component={OraretDashboardStudenti}
                />
                <Route
                  path="/nxenesiPage/autobusatOrari"
                  component={AutobusatDashboardStudenti}
                />
                <Route
                  path="/nxenesiPage/aktivitetet"
                  component={AktivitetetDashboardStudenti}
                />
              </Switch>
            </Container>
          </>
        )}
      /> */}
      </>
    // </div>
  );
}

export default observer(App);
