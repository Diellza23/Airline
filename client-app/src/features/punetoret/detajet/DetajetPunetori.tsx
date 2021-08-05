import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function DetajetPunetori() {
  const { punetoriStore } = useStore();
  const { selectedPunetori: punetori, loadPunetori, loadingInitial } = punetoriStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadPunetori(id);
  }, [id, loadPunetori]);

  if (loadingInitial || !punetori) return <LoadingComponent />;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header> Aeroplani: {punetori.aeroplanId}</Card.Header>
        <br/>
        <Card.Meta>Emri: {punetori.emri}</Card.Meta>
        <br/>
        <Card.Meta>
          <span>Mbiemri: {punetori.mbiemri}</span>
        </Card.Meta>
        <br/>
        <Card.Meta>Data e fillimit te punes: {punetori.date}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={"/manage/" + punetori.id}
            basic
            color="blue"
            content="MODIFIKO"
            background-color="black"
          />
          <Button as={Link} to="/punetoret" basic color="red" content="ANULO" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
