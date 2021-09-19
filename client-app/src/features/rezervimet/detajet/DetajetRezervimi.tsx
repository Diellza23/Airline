import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import {format} from 'date-fns';

export default observer(function DetajetRezervimi() {
  const { rezervimiStore } = useStore();
  const { selectedRezervimi: rezervimi, loadRezervimi, loadingInitial } = rezervimiStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadRezervimi(id);
  }, [id, loadRezervimi]);

  if (loadingInitial || !rezervimi) return <LoadingComponent />;



  return (
    <>
    <h1 style={{textAlign:"center",color:"whitesmoke",backgroundColor:"#ff7a7a", padding:"20px"}}>DETAJET E PUNETORIT</h1>
    <Card fluid style={{backgroundColor:'#b9fae2'}}>
      <Card.Content style={{backgroundColor:'#f0ffff', padding: '12px 8px 12px 40px',margin:'40px',background: '#eee',fontSize: '15px',borderLeft:'6px solid black',
      borderBottom:'4px solid black',
    }}>
        <Card.Header style={{textTransform:'uppercase',borderBottom:"1px solid black"}}> Aeroplani: {rezervimi.vendi_Nisjes}</Card.Header>
        <br/>
        {/* <hr/> */}
        <Card.Meta style={{textTransform:'uppercase',color:"black",fontSize:"17px",borderBottom:"1px solid black"}}>Emri: Data e fillimit te punes: {format(rezervimi.return!, 'dd MMM yyyy h:mm aa')}</Card.Meta>
        <br/>
        <Card.Meta style={{color:'black', textTransform:'uppercase',fontSize:"17px",borderBottom:"1px solid black"}}>
          <span>Mbiemri: {rezervimi.vendi_Mberritjes}</span>
        </Card.Meta>
        <br/>
        <Card.Meta style={{textTransform:'uppercase',fontSize:"17px",color:"black"}}>Data e fillimit te punes: {format(rezervimi.departure!, 'dd MMM yyyy h:mm aa')}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={`/menaxhoR/${rezervimi.id}`} 
            
            color="blue"
            content="MODIFIKO"
          />
          <Button as={Link} to="/punetoret" color="pink" content="ANULO" />
        </Button.Group>
      </Card.Content>
    </Card>
    </>
  );
});
