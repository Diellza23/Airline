import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function DetajetFluturimi() {
  const { fluturimiStore } = useStore();
  const { selectedFluturimi: fluturimi, loadFluturimi, loadingInitial } = fluturimiStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadFluturimi(id);
  }, [id, loadFluturimi]);

  if (loadingInitial || !fluturimi) return <LoadingComponent />;

  return (
    <>
    <h1 style={{textAlign:"center",color:"solid black"}}>FLIGHT DETAILS</h1>
    <Card fluid style={{backgroundColor:'#f0ffff'}}>
      <Card.Content style={{backgroundColor:'#f0ffff', padding: '12px 8px 12px 40px',margin:'40px',background: '#eee',fontSize: '15px',borderLeft:'6px solid black',
      borderBottom:'4px solid black',
    }}>
        <Card.Header style={{textTransform:'uppercase',borderBottom:"1px solid black"}}> Vendi i nisjes: {fluturimi.vendiNisjes}</Card.Header>
        <br/>
        {/* <hr/> */}
        <Card.Meta style={{textTransform:'uppercase',color:"black",fontSize:"17px",borderBottom:"1px solid black"}}>Destinacioni: {fluturimi.vendiMberritjes}</Card.Meta>
        <br/>
        <Card.Meta style={{textTransform:'uppercase',fontSize:"17px",color:"black"}}>Data e fluturimit: {format(fluturimi.date!, 'dd MMM yyyy h:mm aa')}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={`/managee/${fluturimi.id}`} 
            basic
            color="blue"
            content="MODIFIKO"
          />
          <Button as={Link} to="/fluturimet" basic color="red" content="ANULO" />
        </Button.Group>
      </Card.Content>
    </Card>
    </>
  );
});
