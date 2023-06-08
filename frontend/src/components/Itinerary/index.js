import React from "react";

function Itinerary() {
  return (
    <div className="overlay">
      <div className="header">
        <div className="header__btn--back"></div>
        <div className="header__marker"></div>
        <div className="header__title"></div>
        <div className="header__btn--profile"></div>
      </div>
      <div className="newPlanner">
        <div className="newPlanner_btn"></div>
      </div>
      <div className="main">
        <div className="main__list"></div>
        <div className="main__map"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Itinerary;