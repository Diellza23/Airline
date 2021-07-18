import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          Profesori Dashboard
        </Menu.Item>
        <Menu.Item as={NavLink} to="/notat" name="Notat e vendosura" />
        <Menu.Item>
          <Button as={NavLink} to="/addNota" positive content="Shto Nota" />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/konsultimet" name="Konsultimet e vendosura" />
        <Menu.Item>
          <Button as={NavLink} to="/addKonsultime" positive content="Shto Konsultime" />
        </Menu.Item>
        <Menu.Item></Menu.Item>
      </Container>
    </Menu>
  );
}
