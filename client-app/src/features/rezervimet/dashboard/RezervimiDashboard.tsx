import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
// import Popper from "../../home/Popper";
import RezervimiList from "./RezervimiList";

export default observer(function RezervimiDashboard() {
  const { rezervimiStore } = useStore();
  const {loadRezervimet, rezervimiRegistry} = rezervimiStore;

  useEffect(() => {
    if(rezervimiRegistry.size <= 1) loadRezervimet();
  }, [rezervimiRegistry.size, loadRezervimet]);

  if (rezervimiStore.loadingInitial)
    return <LoadingComponent content="Loading Punetoret.." />;

  return (
    //  <
    //    style={{
    //      backgroundImage: `url("https://img.freepik.com/free-vector/pilots-airplane-cockpit-jet-with-control-panel_33099-2238.jpg?size=626&ext=jpg")`,
    //      backgroundPosition: "center",
    //      backgroundRepeat: "no-repeat",
    //      backgroundSize: "cover",
    //      backgroundAttachment: "fixed",
    //      marginTop: -50,
    //    }}
    //  > 
     
    <Grid>
      <Grid.Column width="10">
        <RezervimiList />
      </Grid.Column>
      <Grid.Column width="5">
      </Grid.Column>
    </Grid>
  );
});
