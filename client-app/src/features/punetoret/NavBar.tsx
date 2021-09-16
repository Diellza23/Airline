import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

export default observer(function NavBar() {
  const {userStore: {user, logout}} = useStore();
  return (
    <Menu inverted fixed="top">
      <Container >
        {/* <Menu.Item as={NavLink} to="/" exact header style={{textTransform:"uppercase"}}>
          Home
        </Menu.Item> */}
        <Menu.Item as={NavLink} to="/punetoret" name="Punetoret" style={{textTransform:"uppercase",fontWeight:"bold"}}/>
        <Menu.Item as={NavLink} to="/fluturimet" name="Fluturimet" style={{textTransform:"uppercase",fontWeight:"bold"}}/>
        <Menu.Item as={NavLink} to="/rezervimet" name="Rezervimet" style={{textTransform:"uppercase",fontWeight:"bold"}}/>
        {/* <Menu.Item as={NavLink} to="/udhetari" name="Udhetari" style={{textTransform:"uppercase",fontWeight:"bold"}}/> */}
        {/* <Menu.Item as={NavLink} to="/errors" name="Errors" /> */}
        {/* <Menu.Item>
          <Button as={NavLink} to="/addPunetori" positive content="Shto punetorë" />
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to="/addFluturimi" positive content="Shto fluturim" />
        </Menu.Item> */}
        <Menu.Item position='right'>
          <Image src={user?.image || '/assets/admin.png'} avatar spaced='right' style={{width:"40px",height:"40px"}}/>
          <Dropdown pointing='top right' text={user?.displayName}>
            <Dropdown.Menu >
              <Dropdown.Item as={Link} to={`/profile/`} text='My profile' icon='user secret icon'/>
              <Dropdown.Item onClick={logout} text='Logout' icon='power'/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item></Menu.Item>
        
      </Container>
    </Menu>
  );
})


// import { observer } from 'mobx-react-lite';
// import { NavLink } from 'react-router-dom'
// import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
// import { useStore } from '../../app/stores/store';
// // import { useStore } from '../../../app/stores/store';

// export default observer(function NavBar() {
//     const {userStore: {logout, isLoggedIn}} = useStore();
    
//     return (
        
//         <Sidebar.Pushable className="sideBarA" style={{marginTop:"0"}}>
//             <Sidebar
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             vertical
//             visible
//             width='wide'
//             direction='left'
//             >
//             {isLoggedIn ? (
//                         <Menu.Item style={{marginTop:"20%"}} as={NavLink} to='/udhetariProfile'>
//                         <Icon name='user' />
//                         Profili
//                     </Menu.Item>
//                     ) : (
//                         null
//                     )}
           
           
//             <Menu.Item as={NavLink} to='/punetoret'>
//                 <Icon className='suitcase icon' />
//                 Rezervo Bileta
//             </Menu.Item>

//             <Menu.Item as={NavLink} to='/fluturimet'>
//                 <Icon className='bullhorn icon' />
//                 Njoftimet
//             </Menu.Item>
                        
//             <Menu.Item onClick={logout}>
//                 <Icon name='log out'/>
//                 Dil
//             </Menu.Item>
           
//             </Sidebar>

//             <Sidebar.Pusher>
//             <Segment basic style={{height:"100vh"}}>
//             </Segment>
//             </Sidebar.Pusher>
//         </Sidebar.Pushable>
//     );

// })
