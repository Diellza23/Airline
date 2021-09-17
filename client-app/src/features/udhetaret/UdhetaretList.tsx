import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Item, Menu, Segment, Table } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import NavBar from "../punetoret/NavBar";
import {
  UdhetariUser,
  UdhetariuserFormValues,
} from "../../app/models/udhetariUser";
// import modalUdhetari from "../../app/stores/modalUdhetari";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";
import modalStore from "../../app/stores/modalStore";

export default observer(function UdhetaretList() {
  const { udhetariStore, modalStore } = useStore();
  const { deleteUdhetarin, udhetaretByDate, loading } = udhetariStore;


  const [target, setTarget] = useState("");

  

  function handleUdhetariDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteUdhetarin(id);
  }

  return (
    <>
      <NavBar />
      <div style={{marginTop:"120px"}}>
      <Menu
        attached="top"
        compact
        inverted
        widths={6}
        style={{ margin: "5px"}}
      >
        <Menu.Item as="a">Emri</Menu.Item>
        <Menu.Item as="a">Mbiemri</Menu.Item>
        <Menu.Item as="a">Ditelindja</Menu.Item>
        {/* <Menu.Item as="a">DisplayName</Menu.Item> */}
        <Menu.Item as="a">Username</Menu.Item>
        <Menu.Item as="a">Email</Menu.Item>
        <Menu.Item as="a"></Menu.Item>
      </Menu></div>
      {udhetaretByDate.map((udhetari) => (
        <Table attached inverted celled selectable>
          <Table.Body widths={7} >
            <Table.Row>
              <Table.Cell>{udhetari.emri}</Table.Cell>
              <Table.Cell>{udhetari.mbiemri}</Table.Cell>
              <Table.Cell>{udhetari.birthday}</Table.Cell>
              {/* <Table.Cell>{udhetari.displayName}</Table.Cell> */}
              <Table.Cell>{udhetari.userName}</Table.Cell>
              <Table.Cell>{udhetari.email}</Table.Cell>
              <Table.Cell>
                <Button size="tiny"
                  name={udhetari.id}
                  loading={loading && target === udhetari.id}
                  onClick={(e) => handleUdhetariDelete(e, udhetari.id)}
                  content="FSHIJ"
                  color="red"
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
      {/* <Button onClick={() => modalStore.openModal(<RegisterForm/>)} size='huge' style={{color:"white",backgroundColor:"#ff9f45"}}>
                Register User!
              </Button> */}
    </>
  );
});