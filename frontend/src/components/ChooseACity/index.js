import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import cityRandomData from "../../dummyData/cityRandom";

function ChooseACity({updateCity}) {

    const navigate = useNavigate();

    function handleClickSubmit(event){

        console.log("clicked");
        navigate("/home");

    }
    function handleInputChange(event) {
        updateCity(event.target.value); // Update the input value when it changes
      }

    function handleClickRandomiser(event){
        console.log("clicked");
        let randomCity = cityRandomData[Math.floor(Math.random() * cityRandomData.length)];
        updateCity(randomCity.city);
        navigate("/home");
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
                    onChange={handleInputChange}
                />
                    <button className="userInput__btn--randomiser" onClick={handleClickRandomiser}>
                        I'm feeling adventurous!
                    </button>  
            </div>

            <div className="main">
                <div className="main__animated--globe">globe</div>
                    <button className="main__btn--submit" onClick={handleClickSubmit}>EXPLORE CITY</button>
            </div>
        </div>
    );
}

export default ChooseACity;
