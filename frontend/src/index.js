import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

//IMPORT COMPONENTS TO RENDER IN ROUTES
import App from "./components/App/App.js";
import Homepage from "./components/Homepage";
import GuideOverview from "./components/GuideOverview";
import Favourites from "./components/Favourites";
import Itinerary from "./components/Itinerary";
import CreateItinerary from "./components/CreateItinerary";
import Map from "./components/Map/index";

//REACT ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error/ErrorPage";

//SET UP ROUTES
//WHAT PATH TO NAVIGATE TO AND WHAT COMPONENT TO RENDER AT THAT PATH
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    { path: "home", element: <Homepage /> },
    { path: "guide/:guideId", element: <GuideOverview /> },
    {
        path: "favourites",
        element: <Favourites />,
    },
    {
        path: "planner",
        element: <Itinerary />,
    },
    {
        path: "map",
        element: <Map />,
    },
    { path: "tripbuilder", element: <CreateItinerary /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
