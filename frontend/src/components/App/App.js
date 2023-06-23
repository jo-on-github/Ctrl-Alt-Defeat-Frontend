import "./App.css";
import React from "react";
import Homepage from "../Homepage";
import Itinerary from "../Itinerary";
import { Route, Routes} from "react-router-dom";
import GuideOverview from "../GuideOverview";
import ChooseACity from "../ChooseACity";
import Overview from "../overview/index.js";
import Experience from "../experience/index.js";
import Reviews from "../reviews/index.js";


import ProfilePage from "../ProfilePage";
import EditProfilePage from "../EditProfilePage";


import CreateAGuide from "../CreateAGuide";
import Favourites from "../Favourites";

import LogIn from "../LogIn";
import SignUp from "../SignUp";





function App() {

  const [city, setCity] = React.useState("");

  const updateCity = (city) => {
    setCity(city);
  };


  
  return (
    <div className="routerDiv">
      <Routes>
        <Route path="/login" element={<LogIn />} />
          <Route path="/login/signup" element={<SignUp/>} />
        <Route path="/" element={<ChooseACity updateCity={updateCity} city={city} />} />
        <Route path="/home" element={<Homepage city={city}/>} />
        <Route path="/planner" element={<Itinerary />} />
        <Route path="/guide" element={<GuideOverview />}>
          <Route path="/guide/overview" element={<Overview />} />
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


