import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import {format} from 'date-fns';

export default observer(function DetajetPunetori() {
  const { punetoriStore } = useStore();
  const { selectedPunetori: punetori, loadPunetori, loadingInitial } = punetoriStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadPunetori(id);
  }, [id, loadPunetori]);

  if (loadingInitial || !punetori) return <LoadingComponent />;

  return (
    <>
    <h1 style={{textAlign:"center",color:"grey"}}>DETAJET E PUNETORIT</h1>
    <Card fluid style={{backgroundColor:'#f0ffff'}}>
      <Card.Content style={{backgroundColor:'#f0ffff', padding: '12px 8px 12px 40px',margin:'40px',background: '#eee',fontSize: '15px',borderLeft:'6px solid black',
      borderBottom:'4px solid black',
    }}>
        <Card.Header style={{textTransform:'uppercase',borderBottom:"1px solid black"}}> Aeroplani: {punetori.aeroplanId}</Card.Header>
        <br/>
        {/* <hr/> */}
        <Card.Meta style={{textTransform:'uppercase',color:"black",fontSize:"17px",borderBottom:"1px solid black"}}>Emri: {punetori.emri}</Card.Meta>
        <br/>
        <Card.Meta style={{color:'black', textTransform:'uppercase',fontSize:"17px",borderBottom:"1px solid black"}}>
          <span>Mbiemri: {punetori.mbiemri}</span>
        </Card.Meta>
        <br/>
        <Card.Meta style={{textTransform:'uppercase',fontSize:"17px",color:"black"}}>Data e fillimit te punes: {format(punetori.date!, 'dd MMM yyyy h:mm aa')}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={`/manage/${punetori.id}`} 
            basic
            color="blue"
            content="MODIFIKO"
          />
          <Button as={Link} to="/punetoret" basic color="red" content="ANULO" />
        </Button.Group>
      </Card.Content>
    </Card>
    </>
  );
});
