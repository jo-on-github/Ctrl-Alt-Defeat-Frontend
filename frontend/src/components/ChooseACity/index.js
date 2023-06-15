
import React from 'react';
import './styles.css';
import { useMediaQuery } from "react-responsive";




function ChooseACity() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1537px)",});
  return (
    <div className="overlay">
      <div className="header">
        <div className="header__title">
          <h1>Neighbourhood Nomad</h1>
        </div>
        <div className="header__img--logo">
          <img className="logo__image" src="../image/image-(1).png" alt="logo" />
        </div>
      </div>

      <div className="userInput">
        <input className="userInput__input" type="text" placeholder="🔍     Choose your location..." />
        
        <button className="userInput__btn--randomiser">I'm feeling adventurous!</button>
      </div>

        <div className="main">
        {isDesktopOrLaptop && (
          <div className="main__image--carousel">
            
          </div>
        )}
        <div className="main__animated--globe">globe</div>
        <button className="main__btn--submit">EXPLORE CITY</button>
      </div>
    </div>
  )
}


export default ChooseACity;
