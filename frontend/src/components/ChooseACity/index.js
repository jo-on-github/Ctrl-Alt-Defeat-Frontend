import React, { useState }from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import cityRandomData from "../../dummyData/cityRandom";

function ChooseACity({updateCity, city, getCity}) {

    const [errorMessage, setErrorMessage] = useState("");
    const [about, setAbout] = useState(false)
    const navigate = useNavigate();

    async function handleClickSubmit(event) {
      
        if (city === "") {
          setErrorMessage("Please enter a location");
          return;
        }
        const isValidCity = cityRandomData.some((data) => data.city.toLowerCase() === city.toLowerCase());
        if (!isValidCity) {
          setErrorMessage("Is not a valid location or location is currently not supported. Please select another location");
          return;
        }
        
        await getCity(city);
        navigate("/home");
      }

      function enterKeyPressed(event) {
        if(event.keyCode === 13){
            handleClickSubmit(event);
        }
      }

    function handleInputChange(event) {
        const inputValue = event.target.value;
        const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        updateCity(capitalizedValue);
      }


    function handleErrorClick() {
        setErrorMessage("");
      }

    function handleAboutClick(){
        setAbout(!about)
    }

    return (
        <div className="overlayChooseACity">
            {errorMessage && 
            <div className="modal-overlay">
                <div 
                    className="error">{errorMessage} 
                    <button onClick={handleErrorClick}>Okay!</button>
                </div>
            </div>}
            {about && 
            <div className="aboutModal-overlay">
                <div className="classModal-container">
                    <div className="aboutModal-container__header">
                        <h2>About Us</h2>
                    </div>
                    <div className="aboutModal-container__body">
                        <p>
                            Neighbourhood Nomad is a application made for travellers
                            who want to explore a city with the best local recommendations.
                        </p>
                        <p>
                            To use the application, simply enter a city and click on the "Explore City" button.
                            You will be redirected to the home page where you can see all the local guides
                            for that city. You can also filter the local guides based on the activity type.
                        </p>
                        <p>
                            You can add your own guide, but can only add a guide for the city you
                            currently reside in.
                        </p>
                        <p>
                            The current cities supported are:
                        </p>
                    </div>
                    <ul className="aboutModal-container__body--list">
                            <li>London</li>
                            <li>Devon</li>
                            <li>Paris</li>
                            <li>Tokyo</li>
                            <li>Seoul</li>
                            <li>New York</li>
                        </ul>
                    <div className="aboutModal-container__btn">
                        <button onClick={handleAboutClick}>Go Back</button>
                    </div>
                </div>
            </div>}
            <div className="header">
                <div className="header__title">
                    <h1>Neighbourhood Nomad</h1>
                </div>
            </div>
            <div className="header__img--logo">
                    <img
                        className="logo__image"
                        src="../image/image-(1).png"
                        alt="logo" 
                    />
                </div>
            <div className="userInput">
                <input
                    className="userInput__input"
                    type="text"
                    placeholder="🔍      Choose your location..."
                    onChange={handleInputChange}
                    onKeyDown={enterKeyPressed}
                    data-testid="city-input"
                /> 
            </div>

            <div className="main">
                
                <div className="main__btn">
                    <button className="cocmain__btn--submit" data-testid="city-submit" onClick={handleClickSubmit}>EXPLORE CITY</button>
                    </div>
            </div>
                <div className="main__about">
                    <button className="main__about--btn" onClick={handleAboutClick}>About Us & App Info</button>
                </div>
        </div>
    );
}

export default ChooseACity;
