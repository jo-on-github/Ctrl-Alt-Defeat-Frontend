import React from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";

function Homepage() {
    return (
        <div className="overlay">
            <div className="header">
                Header component goes here
                <div className="header__btn--back"></div>
                <div className="header__marker"></div>
                <div className="header__title"></div>
                <div className="header__btn--profile"></div>
            </div>
            <div className="search">
                <SearchBar />
            </div>
            <div className="main">
                <div className="main__list">Tiles go here</div>
            </div>
            <div className="footer">
                <NavBar />
            </div>
        </div>
    );
}

export default Homepage;
