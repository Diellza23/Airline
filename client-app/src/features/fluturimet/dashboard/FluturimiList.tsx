import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function FluturimiList() {
  const { fluturimiStore } = useStore();
  const { deleteFluturimi, fluturimetByDate, loading } = fluturimiStore;

  const [target, setTarget] = useState("");

  function handleFluturimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteFluturimi(id);
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
      <h3 style={{textAlign:"center",color:"white",marginBottom:"30px"}}>LISTA E FLUTURIMEVE</h3>
        {fluturimetByDate.map((fluturimi) => (
           <Item key={fluturimi.id}>
            <Item.Content>
              <Item.Header style={{color:"white",textTransform:"Uppercase"}}>Vendi i Nisjes :{fluturimi.vendiNisjes}</Item.Header>
              <br/>
              <Item.Extra as="a" style={{color:"white",textTransform:"Uppercase",fontSize:"16px"}}>destinacioni: {fluturimi.vendiMberritjes}</Item.Extra>
              <Item.Meta style={{color:"white",textTransform:"Uppercase",fontSize:"16px"}}>DATA E FLUTURIMIT : {format(fluturimi.date!,'dd MMM yyyy h:mm aa')}</Item.Meta>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/fluturimet/${fluturimi.id}`}
                  floated="right"
                  content="SHIKO"
                  color="green"
                />
                
                <Button
                  name={fluturimi.id}
                  loading={loading && target === fluturimi.id}
                  onClick={(e) => handleFluturimiDelete(e, fluturimi.id)}
                  floated="right"
                  content="FSHIJ"
                  color="blue"
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
