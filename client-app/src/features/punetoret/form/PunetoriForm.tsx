import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";

export default observer(function PunetoriForm() {                           
  const history = useHistory();

  const {punetoriStore} = useStore();
  const { addPunetori, updatePunetori, loading, loadPunetori,loadingInitial } = punetoriStore;
  const {id} = useParams<{id: string}>();
  
  const [punetori, setPunetori] = useState({
    id: '',
    emri: '',
    mbiemri: '',
    date: '',
    aeroplanId:'',
  });

  useEffect(() =>{
    if(id) loadPunetori(id).then(punetori => setPunetori(punetori!))
  }, [id, loadPunetori]); //dependency 


  function handleSubmit() {
      if(punetori.id.length === 0){ 
        let newPunetori = {
          ...punetori,
          id:uuid()
        };
        addPunetori(newPunetori).then(() => history.push('/punetoret/'+newPunetori.id))
      } else{
        updatePunetori(punetori).then(() => history.push('/punetoret/'+punetori.id))
      }
      }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setPunetori({ ...punetori, [name]: value });
  }

  if(loadingInitial) return <LoadingComponent content='Loading Punetoret...'/>

  return (
    
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <h4>Emri:</h4>
        <Form.Input
          placeholder="Shto Emrin.."
          value={punetori.emri}
          name="emri"
          required
          onChange={handleInputChange}
        />
        <h4>Mbiemri:</h4>
        <Form.Input
          placeholder="Shto Mbiemrin.."
          value={punetori.mbiemri}
          name="mbiemri"
          required
          onChange={handleInputChange}
        />
        <h4>Data e fillimit te punes:</h4>
        <Form.Input
          type="date"
          value={punetori.date}
          name="date"
          required
          onChange={handleInputChange}
        />
        <h4>Aeroplani: </h4>
        <Form.Input
          type="number"
          placeholder="Shto Id Aeroplanit"
          value={punetori.aeroplanId}
          name="aeroplanId"
          required
          onChange={handleInputChange}
        />
        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="SHTO"
        />
        <Button as={Link} to ='/punetoret'
          floated="right"
          type="button"
          content="ANULO"
        />
      </Form>
    </Segment>
  );
})
