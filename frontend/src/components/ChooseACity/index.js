import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import cityRandomData from "../../dummyData/cityRandom";
import { setlistItemData } from "../Data/index.js";

function ChooseACity({updateCity, city}) {

    const [errorMessage, setErrorMessage] = React.useState("");
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

      async function getCity(city) {
        const response = await fetch(`http://localhost:4000/guide?city=${city}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        // console.log(data.payload[0]);
        // how does our data display when calling this function
        setlistItemData(data);
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

    function handleClickRandomiser(event){
        console.log("clicked");
        let randomCity = cityRandomData[Math.floor(Math.random() * cityRandomData.length)];
        updateCity(randomCity.city);
        navigate("/home");
    }

    function handleErrorClick() {
        setErrorMessage("");
      }

    return (
        <div className="overlay">
            {errorMessage && 
            <div className="modal-overlay">
                <div 
                    className="error">{errorMessage} 
                    <button onClick={handleErrorClick}>Okay!</button>
                </div>
            </div>}
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
                    placeholder="🔍      Choose your location..."
                    onChange={handleInputChange}
                    onKeyDown={enterKeyPressed}
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
