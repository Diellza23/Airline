import axios from 'axios'
// import { observer } from 'mobx-react-lite'
// import React, { SyntheticEvent, useState } from 'react'
// import { Button, Grid, Item  } from 'semantic-ui-react'
// import { Udhetari } from '../../app/models/udhetari'
// import { useStore } from '../../app/stores/store'
// // import ProfesorRegister from '../../users/ProfesorRegister'
// // import {User} from '../../../app/models/user'

// export default observer(function UdhetaretList () {
//      const [data, setData] = React.useState<Udhetari[]>([]);
//     //  React.useEffect(() => {
//     //      axios.get(('https://localhost:5000/api/profesor/list'))
//     //      .then((res)=>setData(res.data));
//     //  },[]);

//     const {udhetariStore, modalStore} = useStore();
//     const {deleteUdhetarin, loading} = udhetariStore;

//     const [target, setTarget] = useState('');

//     function handleDeleteUser(e: SyntheticEvent<HTMLButtonElement>, id: string) {
//         setTarget(e.currentTarget.name);
//         deleteUdhetarin(id);
//     }

//     //for searching users
//     // const [search, setSearch] = useState('');

//     return (
//         <Grid.Column width='11' style={{marginTop:'2em', marginLeft:"3em", marginRight:'2em'}}>
//             {/* <input style={{marginLeft:'65%', border:'none', borderBottom:'1px solid black', fontSize:'10pt'}} type="text" placeholder="Search User..." onChange={e => {setSearch(e.target.value)}}/> */}
//             <Item.Group divided>
//                 {data.filter((udhetari) => {
//                     }).map((udhetari) => (
//                 <Item style={{fontSize:'8pt'}} key={udhetari.id}>
//                     <Item.Content inverted="true">
//                     <Item.Header>{udhetari.emri}</Item.Header>
//                     <Item.Meta>{udhetari.mbiemri}</Item.Meta>
//                     <Item.Meta>{udhetari.birthday}</Item.Meta>
//                     <Item.Meta>{udhetari.email}</Item.Meta>
//                     <Item.Extra>
//                         {/*<Button positive onClick={() => {(openForm(user.id)); modalStore.openModal(<UserForm/>)}} size='mini' floated='right' content='Edit'/>*/}
//                         <Button negative name={udhetari.id} loading={loading && target === udhetari.id} onClick={(e) => handleDeleteUser(e, udhetari.id)} size='mini' floated='right' content='Fshij Përdoruesin' />
//                     </Item.Extra>
//                     </Item.Content>
//                 </Item>
//                 ))}
//             </Item.Group>
//         </Grid.Column>
        
//     )

// })