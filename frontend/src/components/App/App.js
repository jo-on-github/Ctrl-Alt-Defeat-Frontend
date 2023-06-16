import "./App.css";
import React from "react";
import Homepage from "../Homepage";
import Itinerary from "../Itinerary";
import { Route, Routes} from "react-router-dom";
import GuideOverview from "../GuideOverview";
import ChooseACity from "../ChooseACity";
import Overview from "../GuideOverview/overview/index.js";
import { ListItem } from "@mui/material";
import SearchBar from "../SearchBar";

function App() {
  const [city, setCity] = React.useState("hi");

  const updateCity = (city) => {
    setCity(city);
  };

const [searchFilter, setSearchFilter] = React.useState("");
const searchResult = (searchFilter) => {
  setSearchFilter(searchFilter);
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
      <SearchBar searchResult={searchResult} />
    </div>
  );}


export default App;

