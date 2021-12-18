import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Card, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { Card, Button, Alert, Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {ReactEmbeddedGoogleCalendar} from 'react-embedded-google-calendar'


function Events() {
    return(
        <><Navbar
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
        </Navbar><ReactEmbeddedGoogleCalendar publicUrl="https://calendar.google.com/calendar/embed?src=emanuelcsuntest%40gmail.com&ctz=America%2FLos_Angeles"
            height='600px' /></>
    )
}

export default Events;
