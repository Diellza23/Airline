import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, {  } from "react";//SyntheticEvent
import { NavLink } from "react-router-dom";
import {
  Button,
  Icon,
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
    <Icon
        className="arrow alternate circle left icon"
        as={NavLink}
        to="/addKerkesa"
        style={{
          marginTop: "-26%",
          // marginLeft: "",
          width: "30%",
          paddingLeft: "2%",
          marginLeft:"-35%",
          
          // position:"sticky",
          // height:"35%"
        }}
      >
        <h3 style={{textAlign:"center",color:"white",fontWeight:"bold",textTransform:"uppercase"}}>Nuk gjeni dot fluturimin per vendin e deshiruar?</h3>
        <p style={{textAlign:"center",textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',fontWeight:"bold"}}>Paraqit kerkesen tuaj ketu dhe ne do u kthejme pergjigje sa me shpejte! KLIKO kudo ne kete zone---</p>
        
      </Icon>
      <Button
        as={NavLink}
        to="/udhetariProfile"
        style={{
          backgroundColor: "grey",
          color: "white",
          borderRadius: "12px",
          marginLeft: "-36%",
          marginTop:"10px"
          
        }}
      >Kthehu tek profili</Button>
      
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
      {/* <div style={{marginTop:"-27%",backgroundColor:"#ffe3ab",padding:"15px",color:"grey"}}>
        <Button as={NavLink} to="/addKerkesa" style={{marginLeft:"80%",marginTop:"2%",borderRadius: "12px",backgroundColor:"white",color:"#573a08"}}>Kliko ketu</Button>
        
        <h4 style={{marginTop:"-5%"}}>Nuk gjeni dot fluturimin per vendin e deshiruar? </h4>
        <p>Paraqit kerkesen tuaj ketu dhe ne do u kthejme pergjigje sa me shpejte!</p>
        <Button
        as={NavLink}
        to="/udhetariProfile"
        style={{
          backgroundColor: "yellow",
          color: "blue",
          borderRadius: "12px",
          marginLeft: "-210px",
          marginTop:"10px"
          
        }}
      >Kliko ketu</Button>
      </div> */}
    </>
  );
});
