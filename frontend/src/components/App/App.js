import "./App.css";
import React from "react";

// import { useMediaQuery } from "react-responsive";
//import Homepage from "../Homepage";

import { useMediaQuery } from "react-responsive";

import Homepage from "../Homepage";
import Itinerary from "../Itinerary";
import {Route, Routes} from "react-router-dom";

//import ProfilePage from "../ProfilePage";
// import ChooseACity from "../ChooseACity";
//import Favourites from "../Favourites";
//import ListItem from "../ListItem";
import GuideOverview from "../GuideOverview";
// import Itinerary from "../Itinerary";



import ChooseACity from "../ChooseACity";




function App() {
  //Defining Media Queries for responsive design -
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
});
const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const [city, setCity] = React.useState("hi");

    const updateCity = (city) => {
        setCity(city);
    }

    return (
        <div>

           <Routes>
                <Route path="/" element={<ChooseACity updateCity={updateCity}/>} />
                <Route path="/home" element={<Homepage city={city}/>} />
                <Route path="/planner" element={<Itinerary />} />
                <Route path="/guide-overview" element={<GuideOverview/>} />
           </Routes>

        </div>
    );
}

export default App;
