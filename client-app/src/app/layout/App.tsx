import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/punetoret/NavBar";
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
import LoginFormUdhetari from "../../features/udhetaret/form/LoginFormUdhetari";
import UdhetariNavBar from "../../features/udhetaret/UdhetariNavBar";
import UdhetariProfile from "../../features/udhetaret/UdhetariProfile";
import DetajetRezervimi from "../../features/rezervimet/detajet/DetajetRezervimi";
import RezervimiDashboard from "../../features/rezervimet/dashboard/RezervimiDashboard";
import UdhetariDashboard from "../../features/udhetaret/dashboard/UdhetariDashboard";
import ListaFluturimeveDashboard from "../../features/udhetaret/dashboard/ListaFluturimeveDashboard";
import OfertaDashboard from "../../features/ofertat/dashboard/OfertaDashboard";
import DetajetOferta from "../../features/ofertat/detajet/DetajetOferta";
import OfertaForm from "../../features/ofertat/form/OfertaForm";
import DashboardOferta from "../../features/udhetaret/dashboard/DashboardOferta";
// import RezForm from "../../features/rezervimet/RezForm";
import RezervimiForm from "../../features/rezervimet/form/RezervimiForm";
// import UdhetaretList from "../../features/udhetaret/UdhetaretList";

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

  //  useEffect(() => {
  //   if(commonStore.token) {
  //     udhetariStore.getUdhetari().finally(() => commonStore.setAppLoaded());
  //   } else {
  //     commonStore.setAppLoaded();
  //   }
   
  //  }, [commonStore, udhetariStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app..'/>

  return (
      <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <ModalContainer/>
        <Route exact path="/" component={HomePage} />

        
            <>
             <Container style={{  }}>
                <Switch>    
                  <Route exact path="/punetoret" component={PunetoriDashboard} />
                  <Route exact path="/ofertat" component={OfertaDashboard} />
                  <Route path="/profile" component={Profile} />
                  <Route exact path="/fluturimet" component={FluturimiDashboard} />

                  <Route exact path="/rezervimet" component={RezervimiDashboard} />

                <Route path='/punetoret/:id' component={DetajetPunetori} /> 

                <Route path='/rezervimet/:id' component={DetajetRezervimi} /> 

                <Route path='/fluturimet/:id' component={DetajetFluturimi} />
                <Route path='/ofertat/:id' component={DetajetOferta} />
                <Route exact path="/users" component={UdhetariDashboard} />
                <Route exact path="/listafluturimeve" component={ListaFluturimeveDashboard} />
                <Route exact path="/listaofertave" component={DashboardOferta} />
                <Route key={location.key} path={['/addPunetori', '/manage/:id']} component={PunetoriForm}/>
                <Route key={location.key} path={['/addRezervimi', '/menaxhoR/:id']} component={RezervimiForm}/>                
                <Route key={location.key} path={['/addFluturimi', '/managee/:id']} component={FluturimiForm}/>                
                <Route key={location.key} path={['/addOferta', '/menaxho/:id']} component={OfertaForm}/>                
                
                {/* <Route path='/errors' component={TestErrors}/> */}
                <Route path='/server-error' component={ServerError} />
                {/* <Route path='/login' component={LoginForm}/>  */}
                {/* <Route component={NotFound}/> */}
                </Switch>
                
              </Container>
              <Switch></Switch>
            </>
          
        
        {/* <Route path={"/udhetariPage/(.+)"} render={() => ( */}
            <>
              {/* <UdhetariNavBar /> */}
            
                <Switch>    
                  {/* <Route exact path="/udhetariProfile" component={UdhetariProfile} /> */}
                  <Route path="/udhetariProfile" component={UdhetariProfile} />
                  {/* <Route key={location.key} path={['/addRezervimi', '/manageee/:id']} component={RezervimiForm}/>   */}
                  {/* <Route exact path="/rezervimet" component={RezervimiDashboard} /> */}
                  {/* <Route path='/rezervimet/:id' component={DetajetRezervimi} /> */}
                {/* <Route path='/loginUdhetari' component={LoginFormUdhetari}/>  */}
                </Switch>
                
            </>
      </>
  );
}

export default observer(App);
