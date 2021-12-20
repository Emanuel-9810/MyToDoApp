import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core"; //Creates Display
import NotesContext from "../contexts/NotesContext";
import { db } from "../firebase"; //imported Database
import firebase from "firebase/compat/app";
import "../contexts/Notes.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Box } from "@material-ui/core";

function Notes() {

  var boxStyle = {
    padding: 8,
    height: "92vh",
    background: "#c3b59f",
    display: "flex",
    flexDirection: "column"
  };

  const [error, setError] = useState(null); //ignore
  const { currentUser, logout } = useAuth(); //Gives current user using useAuth
  const [todos, setTodos] = useState([]); 
  const [titleInput, setTitleIn] = useState("");
  const [noteInput, setNoteIn] = useState("");
  
  //Loads previous notes that user created
  useEffect(() => {
    db.collection(currentUser.email) //try to input currentUser for collection("todos") => collection(currentUser)
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
      setTodos(
          snapshot.docs.map(doc => ({
            id: doc.id,
            item: doc.data()
          }))
        );
      });
  }, [titleInput, noteInput]);

  console.log(currentUser.email);

  //Creates and sends note to DB based on email
  const addTodo = e => {
    e.preventDefault();
    db.collection(currentUser.email).add({
      title: titleInput,
      note: noteInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTitleIn("");
    setNoteIn("");
  };

  console.log(todos);

  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
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
            <button
              variant="link"
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Box style={boxStyle}>
      <div className="notes">
        <h1>Create New Note</h1>
        <form>
                  
          <div id="title">
              
            {/*Creates placement for user to type in title  */}
            <FormControl>
              <InputLabel>Title</InputLabel>         
              <Input
                componentClass="textArea"
                onChange={e => setTitleIn(e.target.value)}
              />
            </FormControl>
          </div>
          <div id="note">
            <FormControl>
              <InputLabel>Note</InputLabel>
                             
              <Input
                componentClass="textArea"
                onChange={e => setNoteIn(e.target.value)}
              />
                           
            </FormControl>
          </div>
          <div id="button">
                        
            <Button
              type="submit"
              onClick={addTodo}
              variant="contained"
              color="primary"
              disabled={!titleInput}
              disabled={!noteInput}
            >
              Add Note
            </Button>
          </div>
                  
        </form>
         {/*Creates list of notes interface*/}       
        <ul>
                      
          {todos.map(it => (
            <NotesContext key={it.id} arr={it} />
          ))}
                  
        </ul>
      </div>
      </Box>
    </>
  );
}

export default Notes;