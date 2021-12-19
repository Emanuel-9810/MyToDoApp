import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";




export default function Dashboard() {
  const [error, setError] = useState(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  var boxStyle = {
    padding: 8,
    height: "92vh",
    background: "#96C1F2",
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
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email: </strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-success w-100 mt-3">
                Update Email
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      </Box>

      
    </>
  );
}
