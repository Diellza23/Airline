import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function KonsultimeList() {
  const { konsultimeStore } = useStore();
  const { deleteKonsultime, konsultimetByDate, loading } = konsultimeStore;

  const [target, setTarget] = useState("");

  function handleKonsultimeDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteKonsultime(id);
  }

  return (
    <Segment>
      <Item.Group divided>
      <h3 style={{textAlign:"center"}}>Lista e konsultimeve te vendosura</h3>
        {konsultimetByDate.map((konsultime) => (
          <Item key={konsultime.id}>
            <Item.Content>
              {/* <Item.Header  as="a">Lenda: {konsultime.lenda}</Item.Header> */}
              <Item.Meta>Data e vendosjes: {konsultime.koha}</Item.Meta>
              <Item.Description>
                <div>{konsultime.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  as={Link}
                  to={"/konsultimet/" + konsultime.id}
                  floated="right"
                  content="Shiko"
                  color="blue"
                />
                <Button
                  name={konsultime.id}
                  loading={loading && target === konsultime.id}
                  onClick={(e) => handleKonsultimeDelete(e, konsultime.id)}
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
