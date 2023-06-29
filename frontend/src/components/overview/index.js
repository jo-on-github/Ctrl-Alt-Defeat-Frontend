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
    }, [setChosenCity]);

    const { id } = useParams();

    const selectedItem = chosenCity.find((item) => item._id === id);
    console.log(chosenCity);

    // set budget to be a variable number of pound signs based on the budget value. eg if budget is budget3, then budget = "£££"
    let budget = "";
    switch (selectedItem.budget) 
    {
        case "budget1":
            budget = "£";
            break;
        case "budget2":
            budget = "££";
            break;
        case "budget3":
            budget = "£££";
            break;
        case "budget4":
            budget = "££££";
            break;
        case "budget5":
            budget = "£££££";
            break;
        default:
            budget = "£";
    }
    return (
        <div className="subInfo">
            <div className="subInfo__title">Overview</div>
            <div className="subInfo__description">
                <div>
                    <b>Summary:</b> <br />
                    {selectedItem.overview} <br />
                    <br />
                </div>
                <div>
                    <b>Budget:</b> <br />
                    {budget} <br />
                    <br />
                </div>
                <div>
                    <b>Highlights:</b>
                    <div>
                        <ul>
                            {selectedItem.highlights.map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
