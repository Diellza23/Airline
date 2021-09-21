import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, {  } from "react";//SyntheticEvent
import { NavLink } from "react-router-dom";
import {
  Button,
  Message,
  Table,
} from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
// import UdhetariNavBar from "./UdhetariNavBar";
// import NavBar from "../punetoret/NavBar";

export default observer(function ListaFluturimeve() {
  const { fluturimiStore } = useStore();
  const { fluturimetByDate } = fluturimiStore;


  return (
    <>
      <Button
        as={NavLink}
        to="/udhetariProfile"
        style={{
          backgroundColor: "grey",
          color: "white",
          borderRadius: "12px",
          marginLeft: "-210px",
          marginTop:"10px"
          
        }}
      >Go back</Button>
      <Message
        attached="top"
        content="VEREJTJE--Shikoni me vemendje listen e fluturimeve,
    pas rezervimit te biletes NUK ka kthim mbrapa!"
        icon="attention"
        warning
        style={{ marginTop: "60px" }}
      />
      <Table attached>
        <Table.Header>
          <Table.HeaderCell>Vendi i Nisjes</Table.HeaderCell>
          <Table.HeaderCell>Destinacioni</Table.HeaderCell>
          <Table.HeaderCell>Data e udhetimit</Table.HeaderCell>
        </Table.Header>
        {fluturimetByDate.map((fluturimi) => (
          <Table.Body>
            <Table.Row>
              <Table.Cell>{fluturimi.vendiNisjes}</Table.Cell>
              <Table.Cell>{fluturimi.vendiMberritjes}</Table.Cell>
              <Table.Cell>
                {format(fluturimi.date!, "dd MMM yyyy h:mm aa")}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </>
  );
});
