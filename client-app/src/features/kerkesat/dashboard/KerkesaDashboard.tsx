import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import KerkesaList from "./KerkesaList";

export default observer(function KerkesaDashboard() {
  const { kerkesaStore } = useStore();
  const {loadKerkesat, kerkesaRegistry} = kerkesaStore;

  useEffect(() => {
    if(kerkesaRegistry.size <= 1) loadKerkesat();
  }, [kerkesaRegistry.size, loadKerkesat]);

  if (kerkesaStore.loadingInitial)
    return <LoadingComponent content="Loading Kerkesat.." />;

  return (
    
     <div
       style={{
         backgroundImage: `url("https://images.all-free-download.com/images/graphiclarge/people_at_airport_design_in_colored_style_6826054.jpg")`,
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         backgroundAttachment: "fixed",
         marginTop: -50,
       }}
     > 
    <Grid style={{marginLeft:"160px",width:"1300px"}}>
      <Grid.Column width="10">
        <KerkesaList />
      </Grid.Column>
      <Grid.Column width="5">
      </Grid.Column>
    </Grid>
    </div>
  );
});
