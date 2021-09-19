import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
// import NavBar from "../NavBar";
// import SegmentExm from "./SegmentExm";


export default observer(function RezervimiList() {
  const { rezervimiStore } = useStore();
  const { deleteRezervimi, rezervimetByDate, loading } = rezervimiStore;

  const [target, setTarget] = useState("");

  function handleRezervimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteRezervimi(id);
  }
  const theme ={
    float:'right',
    display: 'flex',
    justifyContent: 'space-around'
  }

  return (      
  <>
  {/* <SegmentExm/> */}
  {/* <UdhetariNavBar/> */}
  <div style={{marginTop:"120px"}}>
    <Segment style={{backgroundColor:"#702963", marginTop:"40px",border:"2px solid pink"}}>
      <Item.Group divided>
      <h3 style={{paddingTop:"10px",textAlign:"center",color:"white",marginBottom:"30px",fontSize:"23px",textTransform:"uppercase"}}>Rezervimet e  regjistruar</h3>
        {rezervimetByDate.map((rezervimi) => (
           <Item key={rezervimi.id}>
            <Item.Content style={{margin:"20px",borderLeft:"8px solid white",padding:"30px",borderRight:"2px solid white",borderBottom:"2px solid yellow",borderTop:"2px solid yellow"}}>
              <Item.Header style={{color:"white",textTransform:"Uppercase",marginBottom:"20px"}}>Vendi i nisjes :{rezervimi.vendi_Nisjes}</Item.Header>
              <br/>
              <Item.Extra as="a" style={{color:"white",textTransform:"Uppercase",fontSize:"17px",marginBottom:"15px",paddingTop:"10px",borderTop:"1px solid white"}}>EMRI: {rezervimi.vendi_Mberritjes}</Item.Extra>
              <Item.Meta style={{color:"white",textTransform:"Uppercase",fontSize:"17px",marginBottom:"5px",paddingTop:"10px",paddingBottom:"10px",borderTop:"1px solid white"}}> MBIEMRI: {rezervimi.cmimi}</Item.Meta>
              <Item.Meta style={{color:"white",textTransform:"Uppercase",fontSize:"17px",marginBottom:"20px",paddingTop:"10px",paddingBottom:"10px",borderTop:"1px solid white",borderBottom:"1px solid white"}}>Rez {format(rezervimi.departure!,'dd MMM yyyy h:mm aa')}</Item.Meta>
              <Item.Meta style={{color:"white",textTransform:"Uppercase",fontSize:"17px",marginBottom:"20px",paddingTop:"10px",paddingBottom:"10px",borderTop:"1px solid white",borderBottom:"1px solid white"}}>Rez: {format(rezervimi.return!,'dd MMM yyyy h:mm aa')}</Item.Meta>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/rezervimet/${rezervimi.id}`}
                  floated="right"
                  content="SHIKO"
                  color="blue"
                />
                
                <Button
                  name={rezervimi.id}
                  loading={loading && target === rezervimi.id}
                  onClick={(e) => handleRezervimiDelete(e, rezervimi.id)}
                  floated="right"
                  content="FSHIJ"
                  color="red"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      
    </Segment></div>
    </>
  );
});
