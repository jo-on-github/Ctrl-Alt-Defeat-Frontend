import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

function ChooseACity({setCity}) {

    function handleClick(event){
        console.log("hello")
        setCity("hello")
    }

    return (
        <div className="overlay">
            <div className="header">
                <div className="header__title">
                    <h1>Neighbourhood Nomad</h1>
                </div>
                <div className="header__img--logo">
                    <img
                        className="logo__image"
                        src="../image/image-(2).png"
                        alt="logo"
                    />
                </div>
            </div>

            <div className="userInput">
                <input
                    className="userInput__input"
                    type="text"
                    placeholder="Choose your location..."
                />
                <SearchIcon className="userInput__icon" />
                <NavLink className="navlink" to={"home"}>
                    <button className="userInput__btn--randomiser">
                        I'm feeling adventurous!
                    </button>
                </NavLink>
            </div>

            <div className="main">
                <div className="main__animated--globe">globe</div>
                <button className="main__btn--submit" onClick={handleClick}>EXPLORE CITY</button>
            </div>
        </div>
    );
}

export default ChooseACity;
