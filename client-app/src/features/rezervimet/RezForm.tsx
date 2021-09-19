import * as React from 'react';
// // import Grid from '@mui/material/Grid';
// // import Typography from '@mui/material/Typography';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
// import { Link, useHistory, useParams } from 'react-router-dom';
// import { useStore } from '../../app/stores/store';
// import { useEffect, useState } from 'react';
// import { Rezervimi } from '../../app/models/rezervimi';
// import { v4 as uuid } from "uuid";
// import * as Yup from 'yup';
// import LoadingComponent from '../../app/layout/LoadingComponent';
// import { Button } from 'semantic-ui-react';
// import { Formik } from 'formik';
// import { observer } from 'mobx-react-lite';
// import MyDateInput from '../../app/common/form/MyDateInput';

// export default observer(function RezForm() {

//     const history = useHistory();

//     const {rezervimiStore} = useStore();
//     const { addRezervimi, updateRezervimi, loading, loadRezervimi,loadingInitial } = rezervimiStore;
//     const {id} = useParams<{id: string}>();
    
//     const [rezervimi, setRezervimi] = useState<Rezervimi>({
//       id: '',
//       vendi_Nisjes:'',
//       vendi_Mberritjes:'',
//       departure: null,
//       return: null,
//       personat:'',
//       cmimi:''
//     })
  
//     const validationSchema = Yup.object({
//       vendi_Nisjes: Yup.string().required('Emri i punetorit i nevojitur!'),
//       vendi_Mberritjes: Yup.string().required('Mbiemri i punetorit i nevojitur!'),
//       departure: Yup.string().required('Data e punesimit e nevojitur!').nullable(),
//       return: Yup.string().required('Data e punesimit e nevojitur!').nullable(),
//       personat: Yup.string().required('Id e Aeroplanit e nevojitur!'),
//       cmimi:Yup.string().required('Id e Aeroplanit e nevojitur!')
//     })
  
//     useEffect(() =>{
//       if(id) loadRezervimi(id).then(rezervimi => setRezervimi(rezervimi!))
//     }, [id, loadRezervimi]); //dependency 
  
  
//     function handleFormSubmit(rezervimi: Rezervimi) {
//         if(rezervimi.id.length === 0){ 
//           let newRezervimi = {
//             ...rezervimi,
//             id:uuid()
//           };
//           addRezervimi(newRezervimi).then(() => history.push(`/rezervimet/${newRezervimi.id}`))
//         } else{
//           updateRezervimi(rezervimi).then(() => history.push(`/rezervimet/${rezervimi.id}`))
//         }
//         }
  
  
//     if(loadingInitial) return <LoadingComponent content='Rez duke u ngarkuar...'/>
  

//   return (
//       <>
//        <Formik
//       validationSchema={validationSchema} 
//       enableReinitialize 
//       initialValues={rezervimi} 
//       onSubmit={values => handleFormSubmit(values)}>
//        {({ handleSubmit, isValid, isSubmitting, dirty}) => (
      
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Shipping address
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="vendi_Nisjes"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//           />{rezervimi.vendi_Nisjes}
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             name="vendi_Mberritjes"
//             label="vendi.."
//             fullWidth
//             autoComplete="family-name"
//             variant="standard"
//           />{rezervimi.vendi_Mberritjes}
//         </Grid>
//         <Grid item xs={12}>
//         <MyDateInput placeholderText='Zgjedh daten'  name='return' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa' />
//         </Grid>
//         <Grid item xs={12}>
//         <MyDateInput placeholderText='Zgjedh daten'  name='departure' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa' />
//         </Grid>
        
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="personat"
//             label="City"
//             fullWidth
//             autoComplete="shipping address-level2"
//             variant="standard"
//           />{rezervimi.personat}
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="state"
//             name="cmimi"
//             label="State/Province/Region"
//             fullWidth
//             variant="standard"
//           />{rezervimi.cmimi}
//         </Grid>
        
//         {/* <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           />
//         </Grid> */}
//         <Button 
//                 disabled={isSubmitting || !dirty || !isValid}
//                 loading={loading} floated="right"  positive type="submit" content="SHTO"/>
//                 <Button as={Link} to ='/rezervimet' floated="right" type="button" content="ANULO"  color="pink"/>
//       </Grid>
//     </React.Fragment>
//     )}
//     </Formik>
//     </>
//   );
// })