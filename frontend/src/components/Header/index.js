import React from "react";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Paper from "@mui/material/Paper";
import "./styles.css";
import {useNavigate, useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header(props ) {
    const buttonStyle = {
        color: "black",
    };

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        if (location.pathname === '/home' ) {
            navigate('/'); 
          } else {
            navigate(-1, { replace: true });
          }
    };
    return (
        <Paper
            sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}}
            elevation={3}
            className="navBar__top"
        >
            <div className="navBar__top--back">
                <Button style={buttonStyle} onClick={handleClick}>
                    <KeyboardBackspaceIcon />
                </Button>
            </div>
            <div className="navBar__top--title">
                <h1>{props.location}</h1>
            </div>
            <div className="navBar__top--image">
               <NavLink to="/ProfilePage" activeClassName = "active"> 
               <img src={props.imageUrl} alt={props.altText} />
               </NavLink> 
            </div>
        </Paper>
    );
}

export default Header;
