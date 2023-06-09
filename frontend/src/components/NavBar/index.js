import React from "react";
import { Button } from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import "./styles.css";

function NavBar() {
    const buttonStyle = {
        color: "black",
    };
    return (
        <div className="navBar">
            <div className="navBar__btn--home">
                <Button style={buttonStyle}>
                    <HomeOutlinedIcon />
                </Button>
            </div>
            <div className="navBar__btn--itinerary">
                <Button style={buttonStyle}>
                    <MapOutlinedIcon />
                </Button>
            </div>
            <div className="navBar__btn--map">
                <Button style={buttonStyle}>
                    <LocationOnOutlinedIcon />
                </Button>
            </div>
            <div className="navBar__btn--favourites">
                <Button style={buttonStyle}>
                    <BookmarkBorderOutlinedIcon />
                </Button>
            </div>
        </div>
    );
}

export default NavBar;
