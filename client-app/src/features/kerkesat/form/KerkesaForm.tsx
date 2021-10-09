import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import { categoryOpsions } from "../../../app/common/options/categoryOptions";
import { Kerkesa } from "../../../app/models/kerkesa";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MySelectInput from "../../punetoret/form/MySelectInput";

export default observer(function KerkesaForm() {                           
  const history = useHistory();

  const {kerkesaStore} = useStore();
  const { addKerkesa, updateKerkesa, loading, loadKerkesa,loadingInitial } = kerkesaStore;
  const {id} = useParams<{id: string}>();
  
  const [kerkesa, setKerkesa] = useState<Kerkesa>({
    id: '',
    titulli:'',
    description:'',
    vendi_Nisjes: '',
    destinacioni: '',
    date: null,
  })

  const validationSchema = Yup.object({
    titulli: Yup.string().required('Titulli i nevojitur!'),
    description: Yup.string().required('Pershkrimi i nevojitur!'),
    vendi_Nisjes: Yup.string().required('Vendi i nisjes nevojitur!'),
    destinacioni: Yup.string().required('Destinacioni nevojitur!'),
  })

  useEffect(() =>{
    if(id) loadKerkesa(id).then(kerkesa => setKerkesa(kerkesa!))
  }, [id, loadKerkesa]); 
  


  function handleFormSubmit(kerkesa: Kerkesa) {
      if(kerkesa.id.length === 0){ 
        let newKerkesa = {
          ...kerkesa,
          id:uuid()
        };
        addKerkesa(newKerkesa).then(() => history.push(`/kerkesat/${newKerkesa.id}`))
      } else{
        updateKerkesa(kerkesa).then(() => history.push(`/kerkesat/${kerkesa.id}`))
      }
      }


  if(loadingInitial) return <LoadingComponent content='Loading kerkesat...'/>

  return (
    <>
    <div style={{marginTop:"60px",width:"900px",marginLeft:"120px"}}>
    <h1 style={{marginTop:"60px",textAlign:"center",textTransform:"uppercase",border:"1px solid green",borderRadius:"5px",backgroundColor:"rgba(92, 151, 191, 1)",color:"white",padding:"20px",marginBottom:"50px"}}>Detajet e Kerkeses</h1>
    <Segment clearing style={{backgroundColor:"rgba(92, 151, 191, 1)"}}>
      <Formik
      validationSchema={validationSchema} 
      enableReinitialize 
      initialValues={kerkesa} 
      onSubmit={values => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete="off" >
                <h4 style={{textTransform:"uppercase",fontFamily:"sans-serif",color:"white"}}>Titulli:</h4>
                <MyTextInput name='titulli' placeholder='title..'/>
                <h4 style={{textTransform:"uppercase",fontFamily:"sans-serif",color:"white"}}>Pershkrimi:</h4>
                <MyTextInput name='description' placeholder='kerkesa..'/>
                <h4 style={{textTransform:"uppercase",fontFamily:"sans-serif",color:"white"}}>Vendi i nisjes:</h4>
                <MyTextInput name='vendi_Nisjes' placeholder='Vendi i nisjes'/>
                <h4 style={{textTransform:"uppercase",fontFamily:"sans-serif",color:"white"}}>Destinacioni:</h4>
                <MyTextInput placeholder="Destinacioni.." name="destinacioni"  />
                <h4 style={{textTransform:"uppercase",fontFamily:"sans-serif",color:"white"}}>Data e formulimit te kerkeses:</h4>
                <MyDateInput placeholderText='Zgjedh daten'  name='date' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa' />
                <Button 
                disabled={isSubmitting || !dirty || !isValid}
                loading={loading} floated="right"  positive type="submit" content="SHTO"/>
                <Button as={Link} to ='/kerkesat' floated="right" type="button" content="ANULO" color="orange"/>
            </Form>
        )}
      </Formik>
    </Segment>
    </div>
    </>
  );
})
