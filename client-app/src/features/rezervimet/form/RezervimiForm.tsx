import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Header, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
// import MySelectInput from "./MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { Rezervimi } from "../../../app/models/rezervimi";
import MySelectInput from "../../punetoret/form/MySelectInput";

export default observer(function RezervimiForm() {                           
  const history = useHistory();

  const {rezervimiStore} = useStore();
  const { addRezervimi, updateRezervimi, loading, loadRezervimi,loadingInitial } = rezervimiStore;
  const {id} = useParams<{id: string}>();
  
  const [rezervimi, setRezervimi] = useState<Rezervimi>({
    id: '',
    vendi_Nisjes:'',
    vendi_Mberritjes:'',
    departure: null,
    return: null,
    personat:'',
    cmimi:''
  })

  const validationSchema = Yup.object({
    vendi_Nisjes: Yup.string().required('Emri i punetorit i nevojitur!'),
    vendi_Mberritjes: Yup.string().required('Mbiemri i punetorit i nevojitur!'),
    departure: Yup.string().required('Data e punesimit e nevojitur!').nullable(),
    return: Yup.string().required('Data e punesimit e nevojitur!').nullable(),
    personat: Yup.string().required('Id e Aeroplanit e nevojitur!')
  })

  useEffect(() =>{
    if(id) loadRezervimi(id).then(rezervimi => setRezervimi(rezervimi!))
  }, [id, loadRezervimi]); //dependency 


  function handleFormSubmit(rezervimi: Rezervimi) {
      if(rezervimi.id.length === 0){ 
        let newRezervimi = {
          ...rezervimi,
          id:uuid()
        };
        addRezervimi(newRezervimi).then(() => history.push(`/rezervimet/${newRezervimi.id}`))
      } else{
        updateRezervimi(rezervimi).then(() => history.push(`/rezervimet/${rezervimi.id}`))
      }
      }


  if(loadingInitial) return <LoadingComponent content='Punetoret duke u ngarkuar...'/>

  return (
    <>
    <h1 style={{textAlign:"center",color:"white",backgroundColor:"#c159cf", padding:"25px",textTransform:"uppercase"}}>Detajet e punetorit</h1>
    
    <Segment clearing>
      <Formik
      validationSchema={validationSchema} 
      enableReinitialize 
      initialValues={rezervimi} 
      onSubmit={values => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete="off">
                <h4>Vendi i nisjes:</h4>
                <MyTextInput name='vendi_Nisjes' placeholder='pristina..'/>
                <h4>Destinacioni:</h4>
                <MyTextInput placeholder="destinacioni.." name='hamburg..'/>
                <h4>Data e nisjes:</h4>
                <MyDateInput placeholderText='Zgjedh daten'  name='departure' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa' />
                <h4>Data e mberritjes:</h4>
                <MyDateInput placeholderText='Zgjedh daten'  name='return' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa' />
                <h4>Rezervim per sa persona: </h4>
                <MySelectInput options={categoryOptions}placeholder="Linja e Aeroplanit.." name="personat"  />
                <Button 
                disabled={isSubmitting || !dirty || !isValid}
                loading={loading} floated="right"  positive type="submit" content="SHTO"/>
                <Button as={Link} to ='/rezervimet' floated="right" type="button" content="ANULO"  color="pink"/>
            </Form>
        )}
      </Formik>
      
    </Segment>
    </>
  );
})
