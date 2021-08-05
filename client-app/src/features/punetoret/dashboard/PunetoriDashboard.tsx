import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
// import Popper from "../../home/Popper";
import PunetoriList from "./PunetoriList";

export default observer(function PunetoriDashboard() {
  const { punetoriStore } = useStore();
  const {loadPunetoret, punetoriRegistry} = punetoriStore;

  useEffect(() => {
    if(punetoriRegistry.size <= 1) loadPunetoret();
  }, [punetoriRegistry.size, loadPunetoret]);

  if (punetoriStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
     <div
       style={{
         backgroundImage: `url("https://i.pinimg.com/originals/31/c3/42/31c34292f9f47c3dcf4b73cb5c5fa808.jpg")`,
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         backgroundAttachment: "fixed",
         marginTop: -50
       }}
     > 
     
    <Grid>
      <Grid.Column width="10">
        <PunetoriList />
      </Grid.Column>
      <Grid.Column width="5">
      </Grid.Column>
    </Grid></div>
  );
});
