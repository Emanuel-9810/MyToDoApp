import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Navbar, Nav, Container } from "react-bootstrap";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { CardActionArea } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { alignPropType } from "react-bootstrap/esm/types";


function Productivity() {

    const handleClick = () => {
        window.open("https://www.workzone.com/blog/how-to-be-more-productive");
      };
      const handleClick2 = () => {
        window.open("https://www.forbes.com/sites/johnrampton/2018/05/01/manipulate-time-with-these-powerful-20-time-management-tips/?sh=45ade5a957ab");
      };

    return(
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
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Tips on becoming more productive
                    </Typography>
                    <Typography variant="body2">
                        Learn how to be more optimal throughout your day
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" bgcolor="primary" onClick={handleClick}>Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Tips on maximizing time effeciency
                    </Typography>
                    <Typography variant="body2">
                        Learn how to be more optimal with your time
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" bgcolor="primary" onClick={handleClick2}>Learn More</Button>
                </CardActions>
            </Card>


        </>
    )
}
export default Productivity;