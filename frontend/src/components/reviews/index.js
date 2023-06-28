import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

export default function Reviews({chosenCity}) {

  const {id} = useParams();

  const selectedItem = chosenCity.find(item => item._id === id);
  console.log(chosenCity);

  return (
    <div className="subInfo">
      <div className="subInfo__title">Location</div>
      <div className="subInfo__description">{selectedItem.location}</div>
    </div>
  );
}
