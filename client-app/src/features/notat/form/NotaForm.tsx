import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";

export default observer(function NotaForm() {                           
  const history = useHistory();

  const {notaStore} = useStore();
  const { addNota, updateNota, loading, loadNota,loadingInitial } = notaStore;
  const {id} = useParams<{id: string}>();
  
  const [nota, setNota] = useState({
    id: '',
    nota_Std: '',
    date: '',
    description: '',
    studentiId:'',
  });

  useEffect(() =>{
    if(id) loadNota(id).then(nota => setNota(nota!))
  }, [id, loadNota]); //dependency 


  function handleSubmit() {
      if(nota.id.length === 0){ 
        let newNota = {
          ...nota,
          id:uuid()
        };
        addNota(newNota).then(() => history.push('/notat/'+newNota.id))
      } else{
        updateNota(nota).then(() => history.push('/notat/'+nota.id))
      }
      }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setNota({ ...nota, [name]: value });
  }

  if(loadingInitial) return <LoadingComponent content='Loading notat...'/>

  return (
    
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
       <h4>Id e studentit: </h4> 
         <Form.Input
          value={nota.studentiId}
          name="studentiId"
          // required
          // onChange={handleInputChange}
          // disabled
        /> 
        <h4>Nota e studentit: </h4>
        <Form.Input
          placeholder="Shto Noten"
          value={nota.nota_Std}
          name="nota_Std"
          required
          onChange={handleInputChange}
        />
        <h4>Data e vendosjes se notes:</h4>
        <Form.Input
          type="date"
          value={nota.date}
          name="date"
          required
          onChange={handleInputChange}
        />
        <h4>Pershkrimi: </h4>
        <Form.TextArea
          placeholder="Shto pershkrim"
          value={nota.description}
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
        <Button as={Link} to ='/notat'
          floated="right"
          type="button"
          content="Anulo"
        />
      </Form>
    </Segment>
  );
})
