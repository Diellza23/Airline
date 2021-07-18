import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import KonsultimeList from "./KonsultimeList";

export default observer(function KonsultimeDashboard() {
  const { konsultimeStore } = useStore();
  const {loadKonsultimet, konsultimeRegistry} = konsultimeStore;

  useEffect(() => {
    if(konsultimeRegistry.size <= 1) loadKonsultimet();
  }, [konsultimeRegistry.size, loadKonsultimet]);

  if (konsultimeStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Grid>
      <Grid.Column width="10">
        <KonsultimeList />
      </Grid.Column>
      <Grid.Column width="6">
      </Grid.Column>
    </Grid>
  );
});
