import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

//IMPORT COMPONENTS TO RENDER IN ROUTES
import App from "./components/App/App.js";

//REACT ROUTER
import { BrowserRouter } from "react-router-dom";
//SET UP ROUTES
//WHAT PATH TO NAVIGATE TO AND WHAT COMPONENT TO RENDER AT THAT PATH
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//     },
//     { path: "home", element: <Homepage /> },
//     { path: "guide/:guideId", element: <GuideOverview /> },
//     {
//         path: "favourites",
//         element: <Favourites />,
//     },
//     {
//         path: "planner",
//         element: <Itinerary />,
//     },
//     {
//         path: "map",
//         element: <Map />,
//     },
//     { path: "tripbuilder", element: <CreateItinerary /> },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
