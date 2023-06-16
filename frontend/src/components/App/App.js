import "./App.css";
import React from "react";
import Homepage from "../Homepage";
import Itinerary from "../Itinerary";
import { Route, Routes} from "react-router-dom";
import GuideOverview from "../GuideOverview";
import ChooseACity from "../ChooseACity";
import Overview from "../GuideOverview/overview/index.js";

import Experience from "../GuideOverview/experience/index.js";
import Reviews from "../GuideOverview/reviews/index.js";




function App() {
  const [city, setCity] = React.useState("hi");

  const updateCity = (city) => {
    setCity(city);
  };


  
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChooseACity updateCity={updateCity} />} />
        <Route path="/home" element={<Homepage city={city}/>} />
        <Route path="/planner" element={<Itinerary />} />
        <Route path="/guide" element={<GuideOverview />}>
          <Route path="/guide/overview" element={<Overview />} />
          <Route path="/guide/experience" element={<Experience />} />
          <Route path="/guide/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );}


export default App;


