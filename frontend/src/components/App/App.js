import "./App.css";

import React from "react";
import { useMediaQuery } from "react-responsive";
//import Homepage from "../Homepage";
//import ProfilePage from "../ProfilePage";
//import ChooseACity from "../ChooseACity";
//import Favourites from "../Favourites";
//import ListItem from "../ListItem";
//import GuideOverview from "../GuideOverview";
import Itinerary from "../Itinerary";

function App() {
    //Defining Media Queries for responsive design -
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    //const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    //const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

    //Logic inside return statement either renders app or renders error message dependent on size of screen vieweing content.
    //If you need to render something to screen render it after {isTabletorMobile && RENDER-COMPONENT-HERE}
    //Ask dan if unsure
    return (
        <div>
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
            {isTabletOrMobile && <Itinerary />}
        </div>
    );




}

export default App;
