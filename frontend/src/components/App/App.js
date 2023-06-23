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


import ProfilePage from "../ProfilePage";
import EditProfilePage from "../EditProfilePage";
import { useEffect } from "react";
import CreateAGuide from "../CreateAGuide";
import Favourites from "../Favourites";

import LogIn from "../LogIn";
import SignUp from "../SignUp";

function App() {

  const [city, setCity] = React.useState("");

  const updateCity = (city) => {
    setCity(city);
  };

  const [chosenCity, setChosenCity] = React.useState("");
 

  async function getCity(city) {
    const response = await fetch(`http://localhost:4000/guide?city=${city}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // console.log(data.payload[0]);
    // how does our data display when calling this function
    setChosenCity(data);
    // console.log(chosenCity);
  }

  useEffect(() => {
    console.log(chosenCity);
  }, [chosenCity]);

  // const [guideData, setGuideData] = React.useState(null);
  

  // const [id, setId] = React.useState(null);

  // const handleListItemClick = (id) => {
  //   setId(chosenCity.id);
  //   console.log(id);
  //   }
    
  // async function getGuideData(id) {
  //   const response = await fetch(`http://localhost:4000/guide/${id}/overview`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await response.json();
  //   setGuideData(data);
  //   console.log(guideData);
  // }

  // useEffect(() => {
  //   console.log(guideData);
  // }, [guideData]);
  
  
  return (
    <div className="routerDiv">
      <Routes>
        <Route path="/login" element={<LogIn />} />
          <Route path="/login/signup" element={<SignUp/>} />
        <Route path="/" element={<ChooseACity updateCity={updateCity} city={city} getCity={getCity} />} />
        <Route path="/home" element={<Homepage city={city} chosenCity={chosenCity}/>} />
        <Route path="/planner" element={<Itinerary />} />
        <Route path="/guide" element={<GuideOverview />}>
          <Route path="/guide/overview" element={<Overview  chosenCity={chosenCity} />} />
          <Route path="/guide/experience" element={<Experience />} />
          <Route path="/guide/reviews" element={<Reviews />} />
        </Route>
        <Route path="/createaguide" element={<CreateAGuide />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
           <Route path="/ProfilePage/edit" element={<EditProfilePage />} />
        <Route path= "/Favourites" element={<Favourites />} />
      </Routes>
    </div>
  );}



export default App;


