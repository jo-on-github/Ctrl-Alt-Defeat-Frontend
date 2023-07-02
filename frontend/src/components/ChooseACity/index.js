import React, { useState }from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import cityRandomData from "../../dummyData/cityRandom";

function ChooseACity({updateCity, city, getCity}) {

    const [errorMessage, setErrorMessage] = useState("");
    const [about, setAbout] = useState(true)
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
                    <div className="aboutModal-container__about">
                        <p>test</p>
                    </div>
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
        </div>
    );
}

export default ChooseACity;
