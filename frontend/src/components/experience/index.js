import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

export default function Experience({ chosenCity}) {

  const {id} = useParams();

  const selectedItem = chosenCity.find(item => item._id === id);
  console.log(chosenCity);

  return (
    <div className="subInfo">
      <div className="subInfo__title">Experience</div>
      <div className="subInfo__description">{selectedItem.experience}</div>
    </div>
  );
}
