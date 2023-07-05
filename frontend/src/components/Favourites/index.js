import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Paper from "@mui/material/Paper";
import "./styles.css";
import {useNavigate, useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";


function Favourites({imageUrl,altText,token}) {
  
  const [favourites, setFavourites] = useState([]);


useEffect(() => {
  async function getFavourites() {
    const response = await fetch(`https://ctrl-alt-defeat-backend.onrender.com/favourites/${token.userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setFavourites(data);
    console.log(favourites);
  }
  getFavourites();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [token.userId]);

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
    <div className="overlay">
      <div className="favouritesHeader">
      <Paper
            sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
            elevation={3}
            className="navBar__top"
        >
            <div className="navBar__top--back">
                <Button style={buttonStyle} onClick={handleClick}>
                    <KeyboardBackspaceIcon />
                </Button>
            </div>
            <div className="navBar__top--title">
                <h1>Favourites</h1>
            </div>
            <div className="navBar__top--image">
               <NavLink to="/ProfilePage" activeClassName = "active"> 
               <img src={imageUrl} alt={altText} />
               </NavLink> 
            </div>
        </Paper>
      </div>
      <div className="main">
        <div className="main__list"></div>
      </div>
      <div className="footer">
        <NavBar />
      </div>
    </div>
  );
}

export default Favourites;
