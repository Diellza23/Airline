import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function DetajetKonsultime() {
  const { konsultimeStore } = useStore();
  const { selectedKonsultime: konsultime, loadKonsultime, loadingInitial } = konsultimeStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadKonsultime(id);
  }, [id, loadKonsultime]);

  if (loadingInitial || !konsultime) return <LoadingComponent />;

  return (
    <Card fluid>
      <Card.Content>
        {/* <br/> */}
        <Card.Meta>
          <span>Data e vendosjes se mbajtjes se konsultimit: {konsultime.koha}</span>
        </Card.Meta>
        <br/>
        <Card.Description>Pershkrimi: {konsultime.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={"/manage/" + konsultime.id}
            basic
            color="blue"
            content="Modifiko"
          />
          <Button as={Link} to="/konsultimet" basic color="grey" content="Anulo" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
