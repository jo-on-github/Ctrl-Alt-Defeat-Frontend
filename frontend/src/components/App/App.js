import "./App.css";
import React, { useState, useEffect } from "react";
import Homepage from "../Homepage";
import Itinerary from "../Itinerary";
import { Route, Routes, useNavigate } from "react-router-dom";
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  // change document title

  useEffect(() => {
    document.title = "Neighbourhood Nomad";
  }, []);

  useEffect(() => {
    // Check if the user has a JWT stored and if it's expired
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const isExpired = isTokenExpired(decodedToken);

      if (!isExpired) {
        // User is logged in
        setIsLoggedIn(true);
        return;
      }
    }

    // User is not logged in or token expired, navigate to the login page
    if (window.location.pathname !== "/login" && window.location.pathname !== "/login/signup") {
      navigate("/login");
    }
  }, [navigate]);

  const decodeToken = (token) => {
    try {
      // Decode the JWT token
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setToken(decodedToken)
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  console.log(token);

  const isTokenExpired = (decodedToken) => {
    if (decodedToken) {
      const currentTime = Date.now() / 1000; // Convert to seconds
      return decodedToken.exp < currentTime;
    }
    return true;
  };

  const [city, setCity] = React.useState("");

  const updateCity = (city) => {
    setCity(city);
    localStorage.setItem("city", city);
  };

  useEffect(() => {
    const citySearched = localStorage.getItem("city");
    if (citySearched) {
      setCity(citySearched);
    }
  }, []);

  const [chosenCity, setChosenCity] = React.useState([]);
 

  async function getCity(city) {
    const response = await fetch(`https://ctrl-alt-defeat-backend.onrender.com/guide?city=${city}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // console.log(data.payload[0]);
    // how does our data display when calling this function
    setChosenCity(data);
    // console.log(chosenCity);
    localStorage.setItem("chosenCity", JSON.stringify(data));
  }

  useEffect(() => {

    const storedCity = localStorage.getItem("chosenCity");
    if (storedCity) {
      setChosenCity(JSON.parse(storedCity));
    }
  }, []);

 

  
  useEffect(() => {
    async function getAllUsers() {
      const response = await fetch("https://ctrl-alt-defeat-backend.onrender.com/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setAllUsers(data);
    }
    getAllUsers();
  }, []); // Provide an empty dependency array here
  
  
  return (
    <div className="routerDiv">
      <Routes>
        <Route path="/login" element={<LogIn token={token} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
          <Route path="/login/signup" element={<SignUp allUsers={allUsers}/>} />
          {isLoggedIn ? (
        <Route path="/" element={<ChooseACity updateCity={updateCity} city={city} getCity={getCity} />} />
        ) : (
          <Route path="/" element={<div>Redirecting...</div>} />
        )}
        <Route path="/home" element={<Homepage city={city} chosenCity={chosenCity} />} />
        <Route path="/planner" element={<Itinerary />} />
        <Route path="/guide" element={<GuideOverview chosenCity={chosenCity} setChosenCity={setChosenCity}/>}>
          <Route path="/guide/:id/overview" element={<Overview chosenCity={chosenCity} setChosenCity={setChosenCity} />} />
          <Route path="/guide/:id/experience" element={<Experience chosenCity={chosenCity} />} />
          <Route path="/guide/:id/location" element={<Reviews chosenCity={chosenCity} />} />
        </Route>
        <Route path="/createaguide" element={<CreateAGuide token={token} getCity={getCity}/>} />
        <Route path="/ProfilePage" element={<ProfilePage token={token}/>} />
        <Route path="/ProfilePage/edit" element={<EditProfilePage />} />
        <Route path="/favourites" element={<Favourites token={token} />} />
      </Routes>
    </div>
  );}



export default App;


