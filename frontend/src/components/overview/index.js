import React from "react";
import "./styles.css";



export default function Overview({chosenCity, match}) {
  const guideId = match.params.id;
  const item = chosenCity.find((item) => item._id === guideId);
  return (
    <div className="subInfo">
      <div className="subInfo__title">Overview</div>
      {chosenCity &&<div className="subInfo__description">
       {item.overview}
      </div>}

  
    </div>
  );
}
