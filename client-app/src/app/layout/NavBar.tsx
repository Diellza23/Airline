import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          Main
        </Menu.Item>
        <Menu.Item as={NavLink} to="/punetoret" name="Punetoret" />
        <Menu.Item as={NavLink} to="/errors" name="Errors" />
        <Menu.Item>
          <Button as={NavLink} to="/addPunetori" positive content="Shto punetorë" />
        </Menu.Item>
        <Menu.Item></Menu.Item>
      </Container>
    </Menu>
  );
}
