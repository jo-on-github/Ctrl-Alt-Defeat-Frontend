import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Button from "@mui/material-next/Button";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";
import dummy from "../images/profile_photo/dummy.jpg";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
                <Header imageUrl={dummy} altText="My Image" location="London" />
            </div>
            <div className="newPlanner">
                <div className="newPlanner_btn">
                    <Button
                        variant="contained"
                        style={buttonStyle}
                        size="small"
                    >
                        <AddIcon />
                        Plan New Trip
                    </Button>
                </div>
            </div>
            <div className="main">
                <h2>Your Trips</h2>
                <Box className="main__listItems" sx={{ flexGrow: 1 }}>
                    <Grid
                        className="main__listItems--grid"
                        container
                        rowSpacing={1.5}
                        columnSpacing={0}
                    >
                        <Grid item xs={6}>
                            <ListItem />
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem />
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem />
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem />
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem />
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="footer">
                <NavBar />
            </div>
        </div>
    );
}

export default Itinerary;
