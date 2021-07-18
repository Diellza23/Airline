import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import NotaList from "./NotaList";

export default observer(function NotaDashboard() {
  const { notaStore } = useStore();
  const {loadNotat, notaRegistry} = notaStore;

  useEffect(() => {
    if(notaRegistry.size <= 1) loadNotat();
  }, [notaRegistry.size, loadNotat]);

  if (notaStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Grid>
      <Grid.Column width="10">
        <NotaList />
      </Grid.Column>
      <Grid.Column width="6">
      </Grid.Column>
    </Grid>
  );
});
