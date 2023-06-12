import React from "react";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";

function Header(props) {
    const buttonStyle = {
        color: "black",
    };
    return (
        <div className="navBar__top">
            <div className="navBar__top--back">
                <Button style={buttonStyle}>
                    <KeyboardBackspaceIcon />
                </Button>
            </div>
            <div className="navBar__top--title">
                <h1>{props.location}</h1>
            </div>
            <div className="navBar__top--image">
                <img src={props.imageUrl} alt={props.altText} />
            </div>
        </div>
    );
}

export default Header;
