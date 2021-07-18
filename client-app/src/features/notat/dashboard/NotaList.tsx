import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function NotaList() {
  const { notaStore } = useStore();
  const { deleteNota, notatByDate, loading } = notaStore;

  const [target, setTarget] = useState("");

  function handleNotaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteNota(id);
  }

  return (
    <Segment>
      <Item.Group divided>
      <h3 style={{textAlign:"center"}}>Lista e notave te vendosura</h3>
        {notatByDate.map((nota) => (
          <Item key={nota.id}>
            <Item.Content>
              <Item.Header>Id e studentit:{nota.studentiId}</Item.Header>
              <br/>
              <Item.Extra  as="a">Nota: {nota.nota_Std}</Item.Extra>
              <Item.Meta>Data e vendosjes: {nota.date}</Item.Meta>
              <Item.Description>
                <div>{nota.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  as={Link}
                  to={"/notat/" + nota.id}
                  floated="right"
                  content="Shiko"
                  color="blue"
                />
                <Button
                  name={nota.id}
                  loading={loading && target === nota.id}
                  onClick={(e) => handleNotaDelete(e, nota.id)}
                  floated="right"
                  content="Fshij"
                  color="red"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
});
