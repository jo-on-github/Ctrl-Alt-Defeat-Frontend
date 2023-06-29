import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Overview({ chosenCity, setChosenCity }) {

    
    useEffect(() => {
        const storedCity = localStorage.getItem("chosenCity");
        if (storedCity) {
            setChosenCity(JSON.parse(storedCity));
        }
    });

    const { id } = useParams();

    const selectedItem = chosenCity.find((item) => item._id === id);
    console.log(chosenCity);
    return (
        <div className="subInfo">
            <div className="subInfo__title">Overview</div>
            <div className="subInfo__description">
                Summary: <br />
                {selectedItem.overview} <br />
                <br />
                Budget: <br />
                {selectedItem.budget} <br />
                <br />
                <ul>
                    {selectedItem.highlights.map((item) => {
                        return <li>{item}</li>;
                    })}
                </ul>
                ;
            </div>
        </div>
    );
}
