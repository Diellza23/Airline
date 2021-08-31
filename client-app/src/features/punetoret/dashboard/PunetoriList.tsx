import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
// import SegmentExm from "./SegmentExm";

export default observer(function PunetoriList() {
  const { punetoriStore } = useStore();
  const { deletePunetori, punetoretByDate, loading } = punetoriStore;

  const [target, setTarget] = useState("");

  function handlePunetoriDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deletePunetori(id);
  }
  const theme ={
    float:'right',
    display: 'flex',
    justifyContent: 'space-around'
  }

  return (      
  <>
  {/* <SegmentExm/> */}
  
    <Segment style={{backgroundColor:"rgba(0,0,25,0.7)"}}>
      <Item.Group divided>
      <h3 style={{textAlign:"center",color:"white",marginBottom:"30px"}}>LISTA E STUARDESEVE</h3>
        {punetoretByDate.map((punetori) => (
           <Item key={punetori.id}>
            <Item.Content>
              <Item.Header style={{color:"white"}}>AEROPLANI NE LINJE :{punetori.aeroplanId}</Item.Header>
              <br/>
              <Item.Extra as="a" style={{color:"white"}}>EMRI: {punetori.emri}</Item.Extra>
              <Item.Meta style={{color:"white"}}> MBIEMRI: {punetori.mbiemri}</Item.Meta>
              <Item.Meta style={{color:"white"}}>DATA E FILLIMIT TE PUNES: {punetori.date}</Item.Meta>
              <Item.Extra>
                <Button
                  as={Link}
                  to={"/punetoret/" + punetori.id}
                  floated="right"
                  content="SHIKO"
                  color="blue"
                />
                <Button
                  name={punetori.id}
                  loading={loading && target === punetori.id}
                  onClick={(e) => handlePunetoriDelete(e, punetori.id)}
                  floated="right"
                  content="FSHIJ"
                  color="red"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      
    </Segment>
    </>
  );
});
