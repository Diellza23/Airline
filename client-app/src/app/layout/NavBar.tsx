import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";

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
        {/* <Menu.Item as={NavLink} to="/udhetari" name="Udhetari" style={{textTransform:"uppercase",fontWeight:"bold"}}/> */}
        {/* <Menu.Item as={NavLink} to="/errors" name="Errors" /> */}
        {/* <Menu.Item>
          <Button as={NavLink} to="/addPunetori" positive content="Shto punetorë" />
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to="/addFluturimi" positive content="Shto fluturim" />
        </Menu.Item> */}
        <Menu.Item position='right'>
          <Image src={user?.image || '/assets/user.png'} avatar spaced='right'/>
          <Dropdown pointing='top right' text={user?.displayName}>
            <Dropdown.Menu >
              <Dropdown.Item as={Link} to={`/profile/`} text='My profile' icon='user'/>
              <Dropdown.Item onClick={logout} text='Logout' icon='power'/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item></Menu.Item>
        
      </Container>
    </Menu>
  );
})