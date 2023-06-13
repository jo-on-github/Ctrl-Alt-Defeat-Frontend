import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Button from '@mui/material-next/Button';
import AddIcon from '@mui/icons-material/Add';
import "./styles.css";
import dummy from "../images/profile_photo/dummy.jpg";
import ListItem  from "../ListItem";

function Itinerary() {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#0002FF",
    height: "2em",
    width: "11em",
    
};
  return (
    <div className="overlay">
      <div className="header">
        <Header imageUrl={dummy} altText="My Image" location="London"/>
      </div>
      <div className="newPlanner">
        <div className="newPlanner_btn">
          <Button variant="contained" style={buttonStyle} size="small"><AddIcon/>Plan New Trip</Button>
        </div>
      </div>
      <div className="main">
        <div className="main__list">
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
          
        <div className="main__map"></div>
      </div>
      <div className="footer">
        <NavBar/>
      </div>
  
    </div>
  );
}

export default Itinerary;