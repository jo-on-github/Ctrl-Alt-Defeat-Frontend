import React from 'react';
import './styles.css';

function ChooseACity() {
    return (
        <div className="overlay">
            <div className="header">
                <div className="header__title">
                  <h1>Neighbourhood Nomad</h1>
                </div>
                <div className="header__img--logo" > logo
                </div>
            </div>
            <div className="userInput">
                <div className="userInput__input"> Search city 
                </div>
                <div className="userInput__btn--randomiser"> I'm feeling adventurous!
                </div>
            </div>
            <div className="main">
                <div className="main__animated--globe">   globe        
                </div>
                <div className="main__btn--submit"> Search
                </div>
            </div>

            
        </div>
    )
}
ChooseACity()
export default ChooseACity