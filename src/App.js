
import React,{useState,useEffect} from "react";
import { Col, Row,Button } from "react-bootstrap";


export const  App=()=> {
  const [room,setRoom]= useState(0)
  const [adult,setAdult]= useState(0)
  const [child,setChild]= useState(0)
  
  const handleroomi=()=>{
    setRoom(room +1)
  }
  const handleroomd=()=>{
    setRoom(room -1)
  }
  const handleadulti=()=>{
    setAdult(adult +1)
  }
  const handleadultd=()=>{
    setAdult(adult -1)
  }
  const handlechildi=()=>{
    setChild(child +1)
  }
  const handlechildd=()=>{
    setChild(child -1)
  }
  useEffect(()=>{
    const mult=(adult+child)%4==0 && Math.floor((adult + child)/4);
    (adult + child)%4 ==0 && setRoom(mult)
  },[adult,child])

  return (
    <React.Fragment>
    <div>
     <h1>Room Booking</h1> <br/>
     
    <Row>
      <Col md={4}>
      ROOM
      </Col>
      <Col md={1}>
      <Button disabled={room==0} onClick={handleroomd}>
        -
        </Button>
      </Col>
      <Col md={1}>
      <span>{room}</span>
      </Col>
      <Col md={1}>
      <Button variant="danger" disabled={room==5} onClick={handleroomi}>
        +
      </Button>
      </Col>
    </Row>
    <br/>
     
     
    <Row>
      <Col md={4}>
      ADULT
      </Col>
      <Col md={1}>
      <Button disabled={adult==0} onClick={handleadultd}>
        -
        </Button>
      </Col>
      <Col md={1}>
      <span>{adult}</span>
      </Col>
      <Col md={1}>
      <Button variant="danger" disabled={adult + child==20} onClick={handleadulti}>
        +
      </Button>
      </Col>
    </Row>
    <br/>
    <Row>
      <Col md={4}>
      CHILDERN
      </Col>
      <Col md={1}>
      <Button disabled={child==0} onClick={handlechildd}>
        -
        </Button>
      </Col>
      <Col md={1}>
      <span>{child}</span>
      </Col>
      <Col md={1}>
      <Button variant="danger" onClick={handlechildi} 
      disabled={
        adult==0 || adult + child == 20 ||
        (room == 5 && child == 15) ||
        (room == 4 && child == 12) ||
        (room == 3 && child == 9) ||
        (room == 2 && child == 6) ||
        (room == 1 && child == 3) 
        
        
        
        } >
        +
      </Button>
      </Col>
    </Row>
    <br/>

    </div>
    </React.Fragment>
  );
}

export default App;
