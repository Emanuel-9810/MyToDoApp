import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login'
import axios from 'axios'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Card, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { Card, Button, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function Calendar() {

  var boxStyle = {
    padding: 8,
    height: "92vh",
    background: "#c3b59f",
    display: "flex",
    flexDirection: "column"
  };

  const responseGoogle = (res) =>{
    console.log(res)
    const {code} = res
    axios.post('/api/create-tokens', {code})
    .then(res =>{
      console.log(res.data)
      setSignedIn(true)
    })
    .catch(error=>console.log(error.message))
  }

  const responseError = (err) =>{
    console.log(err)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    //See if submission is successful, log the values
    //console.log(summary, description, location, startDateTime, endDateTime);

    //Create post request to backend
    axios.post('/api/create-event', {
      summary, description, location, startDateTime, endDateTime
    }).then(res =>{
      console.log(res.data)
    }).catch(error =>{
      console.log(error.message)
    })
  }

  const [summary, setSummary]=useState('')
  const [description, setDescription]=useState('')
  const [location, setLocation]=useState('')
  const [startDateTime, setstartDateTime]=useState('')
  const [endDateTime, setendDateTime]=useState('')
  const [signedIn, setSignedIn] = useState(false)


  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
        className="ml-auto px-3"
        
      >
        <Navbar.Brand>Comp484</Navbar.Brand>
        <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/events">My Events</Nav.Link>
              <Nav.Link href="/calendar">My Calendar</Nav.Link>
              <Nav.Link href="/productivity">Productivity</Nav.Link>
              <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Box style={boxStyle}>

      {
        !signedIn ? (      //Google sign in
          <div>
            <GoogleLogin clientId='779331463233-5ltfu9abnik6qsbe7rhgareeojnodium.apps.googleusercontent.com'
            buttonText='Sign In and Authorize Calendar Use'
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={'single_host_origin'}
    
            responseType='code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar'
            />
          </div>):(//Event form
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='summary'>Title</label><br></br>
          <input type="text" id="summary" value={summary} onChange={e=>
            setSummary(e.target.value)
          }/><br></br>

          <label htmlFor='description'>Description</label><br></br>
          <textarea id="description" value={description} onChange={e=>
            setDescription(e.target.value)
          }/><br></br>

          <label htmlFor='location'>Location</label><br></br>
          <input type="text" id="location" value={location} onChange={e=>
            setLocation(e.target.value)
          }/><br></br>

          <label htmlFor='start'>Start Date</label><br></br>
          <input type="datetime-local" id="startDateTime" value={startDateTime} onChange={e=>
            setstartDateTime(e.target.value)
          }/><br></br>

          <label htmlFor='end'>End of Event</label><br></br>
          <input type="datetime-local" id="endDateTime" value={endDateTime} onChange={e=>
            setendDateTime(e.target.value)
          }/><br></br>
          
          <button type="submit">Create Event</button>
        </form>
      </div>) 
      }
      </Box>
      
    </div> /*End of parent div*/
  );
}

export default Calendar;