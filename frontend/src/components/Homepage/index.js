import React, { useState, useEffect }from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";



function Homepage({ city, chosenCity, setChosenCity }) {

    console.log(chosenCity)
    

    const [filterClicked, setFilterClicked] = useState(false);
    const matches = useMediaQuery("(min-width: 833px)");
    const matches2 = useMediaQuery("(min-width: 1279px) ");
    const [selectedActivityTypes, setSelectedActivityTypes] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState(''); // holds the user input from the search bar


   const handleListItemClick = (id) => {
    }

// This function handles the change event of a checkbox in the Autocomplete component.
const handleCheckboxChange = (event) => {
    // Extract the value and checked properties from the event target (checkbox).
    const { value, checked } = event.target;

    // If the checkbox is checked, add the value to the selected activity types.
    if (checked) {
        setSelectedActivityTypes((prevTypes) => [...prevTypes, value]);
    } else {
        // If the checkbox is unchecked, remove the value from the selected activity types.
        setSelectedActivityTypes((prevTypes) =>
            prevTypes.filter((type) => type !== value)
        );
    }
};
    
    // Filter the chosenCity array based on the selected activity types.
    // If there are selected activity types, filter the chosenCity array to include only items with matching activity types.
    // Otherwise, return the original chosenCity array.

      const filteredCity = selectedActivityTypes.length > 0
      ? chosenCity.filter((item) => selectedActivityTypes.includes(item.activityType))
      : chosenCity;

      
      


    

    const handleFilterClick = () => {
        setFilterClicked(false);
    };

    return (
        <div className="h_overlay">

            {filterClicked && 
                <div className="modal-overlay">
                    <div  className="filterBar">
                        <div className="filterBar__title">
                        <h1>Filter</h1>
                        </div>
                        <div className="filterBar__options">
                            <div className="filterBar__options--option">
                                <label htmlFor="foodanddrink">Food & Drink</label>
                                <input type="checkbox" id="foodanddrink" name="foodanddrink" value="foodanddrink" onChange={handleCheckboxChange} checked={selectedActivityTypes.includes("foodanddrink")} />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="sightseeing">Sightseeing</label>
                                <input type="checkbox" id="sightseeing" name="sightseeing" value="sightseeing" onChange={handleCheckboxChange} checked={selectedActivityTypes.includes("sightseeing")} />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="historical">Historical</label>
                                <input type="checkbox" id="historical" name="historical" value="historical" onChange={handleCheckboxChange} checked={selectedActivityTypes.includes("historical")} />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="nightlife">Nightlife</label>
                                <input type="checkbox" id="nightlife" name="nightlife" value="nightlife" onChange={handleCheckboxChange} checked={selectedActivityTypes.includes("nightlife")} />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="nature">Nature</label>
                                <input type="checkbox" id="nature" name="nature" value="nature" onChange={handleCheckboxChange} checked={selectedActivityTypes.includes("nature")} />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="entertainment">Entertainment</label>
                                <input type="checkbox" id="entertainment" name="entertainment" value="entertainment" onChange={handleCheckboxChange} checked={selectedActivityTypes.includes("entertainment")} />
                            </div>

                        </div>
                        <button  onClick={handleFilterClick}>Save</button>
                </div>
            </div>}
        
            <Header
                sx={{ zIndex: 12 }}
                imageUrl={dummy}
                altText="My Image"
                location={city}
                position="absolute"
            />
            <SearchBar
                sx={{ zIndex: 1 }}
                position="relative"
                setFilterClicked={setFilterClicked}
                filterClicked={filterClicked}
                handleCheckboxChange={handleCheckboxChange}
                selectedActivityTypes={selectedActivityTypes}
                setSelectedActivityTypes={setSelectedActivityTypes}
                setSelectedTitle={setSelectedTitle}
                chosenCity={chosenCity}
            />
       
       
            <Box className="main__listItems" sx={{ position: "relative", top: 150, bottom: 150 }}>
                <Grid className="main__listItems--grid" container spacing={2}>
                    {filteredCity.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>

                            <Link to={`/guide/${item._id}/overview`}>
                                <ListItem title={item.title} id={item._id} image={item.imageURL} onClick={handleListItemClick}/>

                            </Link>
                        </Grid>
                    ))}
                    {matches && (
                        <Grid item xs={12} sm={6} md={4}>
                        </Grid>
                    )}
                    {matches2 && (
                        <Grid item xs={12} sm={6} md={4}>
                            {/* Add the contents for matches2 here */}
                        </Grid>
                    )}
                </Grid>
            </Box>

            <NavBar />
        </div>
    );
}

export default Homepage;

// conditional render, when filter is clicked, show subset of results
// add oncheck function to each checkbox
// inside the function, send a request to the backend to get the results filtered by activity type
// create state which shows default results & is updated when the filter is clicked
// set the state of the results to the filtered results
// render the results


