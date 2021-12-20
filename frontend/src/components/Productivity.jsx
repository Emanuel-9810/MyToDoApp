import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Navbar, Nav, Container } from "react-bootstrap";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";
import CardActions from "@mui/material/CardActions";


function Productivity() {
  
    //1.HandleClicks for LearnMore btns
  const handleClick = () => {
    window.open("https://www.workzone.com/blog/how-to-be-more-productive");
  };
  const handleClick2 = () => {
    window.open(
      "https://www.forbes.com/sites/johnrampton/2018/05/01/manipulate-time-with-these-powerful-20-time-management-tips/?sh=45ade5a957ab"
    );
  };
  const handleClick3 = () => {
    window.open(
      "https://www.wikihow.com/Maintain-Your-Energy-Throughout-the-Day"
    );
  };
  const handleClick4 = () => {
    window.open(
      "https://www.inc.com/drew-hendricks/10-superfoods-that-increase-productivity.html"
    );
  };

  //2.Styling for components
  var image = {
    height: "auto",
    width: "200px",
    padding: "5px",
    paddingRight: "10px",
    borderRadius: "15%"
  };
  var formLabel = {
    alignSelf: "center"
  };
  var cardStyle = {
    margin: 5,
    display: "flex",
    flex: 1,
    background: "#C5C1C0"
  };
  var typeDescription = {
    fontSize: 15,
    padding: 1
  };
  var title = {
    padding: 2,
    fontSize: 25,
    alignSelf: "center",
    fontFamily: "Gill Sans",
    fontWeight: "bold"
  };
  var typeTitle = {
    fontSize: 21,
    textDecoration: "underline"
  };
  var boxStyle = {
    padding: 8,
    height: "92vh",
    background: "#c3b59f",
    display: "flex",
    flexDirection: "column"
  };
  var cardBoxStyle = {
    display: "flex",
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-between"
  };

  //3.Cards(sections) to link to
  const productivityCard = (
    //1.Productivity Card
    <Card style={cardStyle}>
      <Box style={cardBoxStyle}>
        <CardContent>
          <Typography style={typeTitle} color="text.secondary" gutterBottom>
            Tips on becoming more productive
          </Typography>

          <Typography style={typeDescription} variant="body2">
            Learn how to be more optimal throughout your day
            <br />
          </Typography>
          <CardActions>
            <Button size="small" bgcolor="primary" onClick={handleClick}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
        <img style={image} src="productivity.jpg" />
      </Box>
    </Card>
  );

  //4.Time effeciency card
  const effeciencyCard = (
    <Card style={cardStyle}>
      <Box style={cardBoxStyle}>
        <CardContent>
          <Typography style={typeTitle} color="text.secondary" gutterBottom>
            Tips on maximizing time effeciency
          </Typography>
          <Typography style={typeDescription} variant="body2">
            Learn how to be more optimal with your time
            <br />
          </Typography>
          <CardActions>
            <Button size="small" bgcolor="primary" onClick={handleClick2}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
        <img style={image} src="time.jpg" />
      </Box>
    </Card>
  );

  //5.Sustain energy card
  const energyCard = (
    <Card style={cardStyle}>
      <Box style={cardBoxStyle}>
        <CardContent>
          <Typography style={typeTitle} color="text.secondary" gutterBottom>
            Tips on sustaining energy thoughout the day
          </Typography>
          <Typography style={typeDescription} variant="body2">
            Learn how sustain your energy in order to be productive throughout
            the day
            <br />
          </Typography>
          <CardActions>
            <Button size="small" bgcolor="primary" onClick={handleClick3}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
        <img style={image} src="energy2.jpg" />
      </Box>
    </Card>
  );

  //6.Foods Card
  const foodCard = (
    <Card style={cardStyle}>
      <Box style={cardBoxStyle}>
        <CardContent>
          <Typography style={typeTitle} color="text.secondary" gutterBottom>
            Tips on foods that help you keep productive
          </Typography>
          <Typography style={typeDescription} variant="body2">
            Learn what foods help you stay productive
            <br />
          </Typography>
          <CardActions>
            <Button size="small" bgcolor="primary" onClick={handleClick4}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
        <img style={image} src="food.jpg" />
      </Box>
    </Card>
  );

  //7. Handles the slides and title of clicking to show
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);

  };
  return (
    <>
      {/* 8. NavBarFeatures*/}
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

      {/* 9. Container for Box */}
      <Box style={boxStyle}>
          {!checked ? <p style={title}>Start being productive and click the circle below</p>: null }
        <FormControlLabel
          style={formLabel}
          labelPlacement="start"
          control={<Switch checked={checked} onChange={handleChange} />}
          label=""
        ></FormControlLabel>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {productivityCard}
        </Slide>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {effeciencyCard}
        </Slide>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {energyCard}
        </Slide>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {foodCard}
        </Slide>
      </Box>
    </>
  );
}
export default Productivity;
