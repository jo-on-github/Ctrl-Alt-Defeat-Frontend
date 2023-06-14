import "./App.css";
import React from "react";

// import { useMediaQuery } from "react-responsive";
//import Homepage from "../Homepage";

import { useMediaQuery } from "react-responsive";

import Homepage from "../Homepage";
import Itinerary from "../Itinerary";

//import ProfilePage from "../ProfilePage";
import ChooseACity from "../ChooseACity";
//import Favourites from "../Favourites";
//import ListItem from "../ListItem";
//import GuideOverview from "../GuideOverview";
// import Itinerary from "../Itinerary";

import ChooseACity from "../ChooseACity";


function App() {
  
    return (
        <div>

            <ChooseACity />

            {isDesktopOrLaptop && (
                <p>
                    We currently do not support this size device. Please use our
                    mobile or tablet site.
                </p>
            )}
            {isBigScreen && (
                <p>
                    We currently do not support this size device. Please use our
                    mobile or tablet site.
                </p>
            )}

   


            {isTabletOrMobile && <ChooseACity />}


        </div>
    );
}

export default App;
