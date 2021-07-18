import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function DetajetNota() {
  const { notaStore } = useStore();
  const { selectedNota: nota, loadNota, loadingInitial } = notaStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadNota(id);
  }, [id, loadNota]);

  if (loadingInitial || !nota) return <LoadingComponent />;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Id e studentit: {nota.studentiId}</Card.Header>
        <br/>
        <Card.Header>Nota e studentit: {nota.nota_Std}</Card.Header>
        <br/>
        <Card.Meta>
          <span>Data e vendosjes se notes: {nota.date}</span>
        </Card.Meta>
        <br/>
        <Card.Description>Pershkrimi: {nota.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={"/manage/" + nota.id}
            basic
            color="blue"
            content="Modifiko"
          />
          <Button as={Link} to="/notat" basic color="grey" content="Anulo" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
