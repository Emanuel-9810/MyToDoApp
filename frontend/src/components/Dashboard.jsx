import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function Dashboard() {
  const [error, setError] = useState(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  var boxStyle = {
    padding: 8,
    height: "92vh",
    background: "#c3b59f",
    display: "flex",
    flexDirection: "column"
  };

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
        <h1 align="center">Welcome to your productivity profile</h1>
        <br></br>
        <h2 align="center">Click on the accordian below to view details on the website's pages</h2>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Accordion>
            {/* Events */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>My Events</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In this page, you can see your up to date google calendar, along with its events,
                time of the event, location, and descriptive details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Calendar */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>My Calendar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Create events that will directly be sent to and added to your google calendar, first you
                would login with the google button, then from there you will be given a form to fill out with
                the event details. This will then be saved onto your primary calendar.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Productivity */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Productivity</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                View resources to become more productive and overall become better with time management,
                productivity, and even health.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Notes */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Notes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                On this page, you can create to do notes and memos to yourself for a simple reminder that
                you can look back on throughout your day.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      </Box>

      
    </>
  );
}
