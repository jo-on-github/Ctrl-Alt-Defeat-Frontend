import React from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";

function Homepage() {
    return (
        <div className="overlay">
            <div className="header">
                <Header imageUrl={dummy} altText="My Image" location="London" />
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
