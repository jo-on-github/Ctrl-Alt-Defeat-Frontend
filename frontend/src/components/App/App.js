import "./App.css";

import React from "react";
<<<<<<< HEAD
// import { useMediaQuery } from "react-responsive";
//import Homepage from "../Homepage";
=======
import { useMediaQuery } from "react-responsive";
import Homepage from "../Homepage";
>>>>>>> 8d58ac8cf20ba71c4405cde68855691a43a1fecf
//import ProfilePage from "../ProfilePage";
import ChooseACity from "../ChooseACity";
//import Favourites from "../Favourites";
//import ListItem from "../ListItem";
//import GuideOverview from "../GuideOverview";
<<<<<<< HEAD
// import Itinerary from "../Itinerary";
=======
//import Itinerary from "../Itinerary";
>>>>>>> 8d58ac8cf20ba71c4405cde68855691a43a1fecf

function App() {
  
    return (
        <div>
<<<<<<< HEAD
            <ChooseACity />
=======
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
            {isTabletOrMobile && <Homepage />}
>>>>>>> 8d58ac8cf20ba71c4405cde68855691a43a1fecf
        </div>
    );
}

export default App;
