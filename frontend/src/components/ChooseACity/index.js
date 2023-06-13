import React from 'react';
import './styles.css';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function ChooseACity(props) {
    const buttonStyle = {
        color: 'black',
        backgroundColor: 'red',
        size: 'large',
    }

    const buttonStyleTwo = {
        color: "red",
    };

    // const glassStyle = {
    //     colour: "grey",    
    // }

    return (
        <div className="overlay">

            <div className="header">
                <div className="header__title">
                  <h1>Neighbourhood Nomad</h1>
                </div>
                <div className="header__img--logo">
                <img className="logo__image" src= "../image/image-(2).png" alt= "logo"/>
            </div>
            </div>

            <div className="userInput">
                <div className="userInput__input"> 
                <Button style={buttonStyle}> Search city 
                <SearchIcon />
                </Button>
                </div>
                <div className="userInput__btn--randomiser"> I'm feeling adventurous!
                </div>
            </div>

            <div className="main">
                <div className="main__animated--globe">   globe        
                </div>
                <div className="main__btn--submit"> 
                <Button style={buttonStyleTwo}> Search  
                </Button>
                </div>
            </div>

            
        </div>
    )
}
export default ChooseACity