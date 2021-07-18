import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";

export default observer(function KonsultimeForm() {                           
  const history = useHistory();

  const {konsultimeStore} = useStore();
  const { addKonsultime, updateKonsultime, loading, loadKonsultime,loadingInitial } = konsultimeStore;
  const {id} = useParams<{id: string}>();
  
  const [konsultime, setKonsultime] = useState({
    id: '',
    lenda: '',
    koha: '',
    description: '',
  });

  useEffect(() =>{
    if(id) loadKonsultime(id).then(konsultime => setKonsultime(konsultime!))
  }, [id, loadKonsultime]); //dependency 


  function handleSubmit() {
      if(konsultime.id.length === 0){ //ku ka studentiid e bon id
        let newKonsultime = {
          ...konsultime,
          id:uuid()
        };
        addKonsultime(newKonsultime).then(() => history.push('/konsultimet/'+newKonsultime.id))
      } else{
        updateKonsultime(konsultime).then(() => history.push('/konsultimet/'+konsultime.id))
      }
      }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setKonsultime({ ...konsultime, [name]: value });
  }

  if(loadingInitial) return <LoadingComponent content='Loading konsultimet...'/>

  return (
    
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
      <h4>Data e vendosjes se notes:</h4>
        <Form.Input
          type="date"
          value={konsultime.koha}
          name="koha"
          required
          onChange={handleInputChange}
        />
        <h4>Pershkrimi: </h4>
        <Form.TextArea
          placeholder="Shto pershkrim"
          value={konsultime.description}
          name="description"
          required
          onChange={handleInputChange}
        />
        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="Shto"
        />
        <Button as={Link} to ='/konsultimet'
          floated="right"
          type="button"
          content="Anulo"
        />
      </Form>
    </Segment>
  );
})
