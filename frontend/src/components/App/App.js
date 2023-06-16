import "./App.css";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Homepage from "../Homepage";
import Itinerary from "../Itinerary";
import { Route, Routes, useLocation } from "react-router-dom";
import GuideOverview from "../GuideOverview";
import ChooseACity from "../ChooseACity";
import Overview from "../GuideOverview/overview/index.js";

function App() {
  const [city, setCity] = React.useState("hi");

  const updateCity = (city) => {
    setCity(city);
  };
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChooseACity updateCity={updateCity} />} />
        <Route path="/home" element={<Homepage city={city} />} />
        <Route path="/planner" element={<Itinerary />} />
        <Route path="/guide" element={<GuideOverview />}>
          <Route path="/guide/overview" element={<Overview />} />
          <Route path="/guide/experience" element={<h1>Experience</h1>} />
          <Route path="/guide/reviews" element={<h1>Reviews</h1>} />
        </Route>
      </Routes>
    </div>
  );}


export default App;



// {isDesktopOrLaptop && (
//     <p>
//         We currently do not support this size device. Please use our
//         mobile or tablet site.
//     </p>
// )}
// {isBigScreen && (
//     <p>
//         We currently do not support this size device. Please use our
//         mobile or tablet site.
//     </p>
// )}
// mobile or tablet site.

// {isTabletOrMobile && <ChooseACity />}