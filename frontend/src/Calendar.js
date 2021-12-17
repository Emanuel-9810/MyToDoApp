import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login'
import axios from 'axios'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Alert, Navbar, Nav, Container } from "react-bootstrap";


// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Reminders from './Reminders';
// import Notes from './Notes';
// import Events from './Events';
// import HomePage from './HomePage';


function Calendar() {

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
      <div className="Calendar">
        {/* <h1>Navigation Bar</h1> */}
        {/* <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
        className="ml-auto px-3">
          <Navbar.Brand>Comp484</Navbar.Brand>
            <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ms-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#">My Events</Nav.Link>
                  <Nav.Link href="#">My Calendar</Nav.Link>
                  <Nav.Link href="#">Reminders</Nav.Link>
                  <Nav.Link href="/notes">Notes</Nav.Link>
                  {/* <button
                    variant="link"
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button> */}
                {/* </Nav>
              </Navbar.Collapse>
            </Navbar> End of Navbar */} */}
      </div>
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
          <label htmlFor='summary'>Summary</label><br></br>
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
    </div> /*End of parent div*/
  );
}

export default Calendar;