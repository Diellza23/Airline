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
import { categoryOpsions, categoryOptions } from "../../../app/common/options/categoryOptions";
import { Fluturimi } from "../../../app/models/fluturimi";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MySelectInput from "../../punetoret/form/MySelectInput";

export default observer(function FluturimiForm() {                           
  const history = useHistory();

  const {fluturimiStore} = useStore();
  const { addFluturimi, updateFluturimi, loading, loadFluturimi,loadingInitial } = fluturimiStore;
  const {id} = useParams<{id: string}>();
  
  const [fluturimi, setFluturimi] = useState<Fluturimi>({
    id: '',
    vendiNisjes: '',
    vendiMberritjes: '',
    date: null,
  })

  const validationSchema = Yup.object({
    vendiNisjes: Yup.string().required('Vendi i nisjes i nevojitur!'),
    vendiMberritjes: Yup.string().required('Vendi i mberritjes i nevojitur!'),
    date: Yup.string().required('Data e fluturimit e nevojitur!').nullable(),
  })

  useEffect(() =>{
    if(id) loadFluturimi(id).then(fluturimi => setFluturimi(fluturimi!))
  }, [id, loadFluturimi]); //dependency 
  


  function handleFormSubmit(fluturimi: Fluturimi) {
      if(fluturimi.id.length === 0){ 
        let newFluturimi = {
          ...fluturimi,
          id:uuid()
        };
        addFluturimi(newFluturimi).then(() => history.push(`/fluturimet/${newFluturimi.id}`))
      } else{
        updateFluturimi(fluturimi).then(() => history.push(`/fluturimet/${fluturimi.id}`))
      }
      }


  if(loadingInitial) return <LoadingComponent content='Loading fluturimet...'/>

  return (
    
    <Segment clearing>
      <Header content='Detajet fluturimi' sub color='teal'/>
      <Formik
      validationSchema={validationSchema} 
      enableReinitialize 
      initialValues={fluturimi} 
      onSubmit={values => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete="off">
                <h4>Vendi i nisjes:</h4>
                <MyTextInput name='vendiNisjes' placeholder='Vendi i nisjes'/>
                <h4>Vendi i mberritjes:</h4>
                <MySelectInput options={categoryOpsions}placeholder="Destinacioni.." name="vendiMberritjes"  />
                <h4>Data e fluturimit:</h4>
                <MyDateInput placeholderText='Zgjedh daten'  name='date' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa' />
                <Button 
                disabled={isSubmitting || !dirty || !isValid}
                loading={loading} floated="right"  positive type="submit" content="SHTO"/>
                <Button as={Link} to ='/fluturimet' floated="right" type="button" content="ANULO" basic color="red"/>
            </Form>
        )}
      </Formik>
      
    </Segment>
  );
})
