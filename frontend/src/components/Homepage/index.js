import React from "react";
import "./styles.css";

function Homepage() {
  return (
    <div className="overlay">
      <div className="header">
        <div className="header__btn--back"></div>
        <div className="header__marker"></div>
        <div className="header__title"></div>
        <div className="header__btn--profile"></div>
      </div>
      <div className="search">
        <div className="search__input"></div>
        <div className="search__btn--filter"></div>
      </div>
      <div className="main">
        <div className="main__list"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Homepage;
