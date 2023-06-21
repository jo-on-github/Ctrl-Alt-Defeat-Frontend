// import React, { useState }from "react";
// import "./styles.css";
// import SearchBar from "../SearchBar";
// import NavBar from "../NavBar";
// import Header from "../Header/index";
// import dummy from "../images/profile_photo/dummy.jpg";
// import listItemData from "../../dummyData/listItemData";
// import ListItem from "../ListItem";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import {getlistItemData } from "../Data/index.js";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { Link } from "react-router-dom";

// function Homepage({ city, updateSearchFilter }) {
//     const [searchFilter, setSearchFilter] = useState(null);
//     const [filterClicked, setFilterClicked] = useState(false);
//     const matches = useMediaQuery("(min-width: 833px)");
//     const matches2 = useMediaQuery("(min-width: 1279px) ");
//     const [uniqueID, setUniqueID] = useState();

//    const handleListItemClick = (id) => {
//         setUniqueID(id);
//     }

//     const handleSearchFilterChange = (searchFilter) => {
//         setSearchFilter(searchFilter);
//     };

//     const cityData = getlistItemData();
//     console.log(cityData);

//     const handleFilterClick = () => {
//         setFilterClicked(false);
//     };

//     return (
//         <div className="overlay">

//             {filterClicked && 
//                 <div className="modal-overlay">
//                     <div  className="filterBar">
//                         <div className="filterBar__title">
//                         <h1>Filter</h1>
//                         </div>
//                         <div className="filterBar__options">
//                             <div className="filterBar__options--option">
//                                 <label htmlFor="foodanddrink">Food & Drink</label>
//                                 <input type="checkbox" id="foodanddrink" name="foodanddrink" value="foodanddrink" />
//                             </div>
//                             <div className="filterBar__options--option">
//                                 <label htmlFor="sightseeing">Sightseeing</label>
//                                 <input type="checkbox" id="sightseeing" name="sightseeing" value="sightseeing" />
//                             </div>
//                             <div className="filterBar__options--option">
//                                 <label htmlFor="historical">Historical</label>
//                                 <input type="checkbox" id="historical" name="historical" value="historical" />
//                             </div>
//                             <div className="filterBar__options--option">
//                                 <label htmlFor="nightlife">Nightlife</label>
//                                 <input type="checkbox" id="nightlife" name="nightlife" value="nightlife" />
//                             </div>
//                             <div className="filterBar__options--option">
//                                 <label htmlFor="nature">Nature</label>
//                                 <input type="checkbox" id="nature" name="nature" value="nature" />
//                             </div>
//                             <div className="filterBar__options--option">
//                                 <label htmlFor="entertainment">Entertainment</label>
//                                 <input type="checkbox" id="entertainment" name="entertainment" value="entertainment" />
//                             </div>

//                         </div>
//                         <button  onClick={handleFilterClick}>Save</button>
//                 </div>
//             </div>}
        
//             <Header
//                 sx={{ zIndex: 12 }}
//                 imageUrl={dummy}
//                 altText="My Image"
//                 location={city}
//                 position="absolute"
//             />
//             <SearchBar
//                 sx={{ zIndex: 1 }}
//                 handleSearchFilterChange={handleSearchFilterChange}
//                 position="relative"
//                 setFilterClicked={setFilterClicked}
//                 filterClicked={filterClicked}
//             />
       
//             <Box className="main__listItems" sx={{ position: "relative", top: 75 }}>
//                 <Grid className="main__listItems--grid" container spacing={2}>
//                     {cityData.map((item, index) => (
//                         <Grid item xs={6} sm={4} md={3} key={index}>
//                             <Link to="/guide/overview">
//                                 <ListItem title={item.title} id={item._id} onClick={handleListItemClick}/>
//                             </Link>
//                         </Grid>
//                     ))}
//                     {matches && (
//                         <Grid item xs={12} sm={6} md={4}>
//                             <ListItem />
//                         </Grid>
//                     )}
//                     {matches2 && (
//                         <Grid item xs={12} sm={6} md={4}>
//                             {/* Add the contents for matches2 here */}
//                         </Grid>
//                     )}
//                 </Grid>
//             </Box>
//             <NavBar />
//         </div>
//     );
// }

// export default Homepage;


import React, { useState } from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";
import listItemData from "../../dummyData/listItemData";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getlistItemData } from "../Data/index.js";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Homepage({ city, updateSearchFilter }) {
  const [searchFilter, setSearchFilter] = useState(null);
  const [filterClicked, setFilterClicked] = useState(false);
  const [uniqueID, setUniqueID] = useState();

  const handleListItemClick = (id) => {
    setUniqueID(id);
  };

  const handleSearchFilterChange = (searchFilter) => {
    setSearchFilter(searchFilter);
  };

  const cityData = getlistItemData();
  console.log(cityData);

  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));

  const listItemWidth = matchesXs
    ? "100%"
    : matchesSm
    ? "50%"
    : matchesMd
    ? "33.33%"
    : matchesLg
    ? "25%"
    : "20%";

  return (
    <div className="overlay">
      {filterClicked && (
        <div className="modal-overlay">
          <div className="filterBar">
            <div className="filterBar__title">
              <h1>Filter</h1>
            </div>
            <div className="filterBar__options">
              <div className="filterBar__options--option">
                <label htmlFor="foodanddrink">Food & Drink</label>
                <input
                  type="checkbox"
                  id="foodanddrink"
                  name="foodanddrink"
                  value="foodanddrink"
                />
              </div>
              <div className="filterBar__options--option">
                <label htmlFor="sightseeing">Sightseeing</label>
                <input
                  type="checkbox"
                  id="sightseeing"
                  name="sightseeing"
                  value="sightseeing"
                />
              </div>
              <div className="filterBar__options--option">
                <label htmlFor="historical">Historical</label>
                <input
                  type="checkbox"
                  id="historical"
                  name="historical"
                  value="historical"
                />
              </div>
              <div className="filterBar__options--option">
                <label htmlFor="nightlife">Nightlife</label>
                <input
                  type="checkbox"
                  id="nightlife"
                  name="nightlife"
                  value="nightlife"
                />
              </div>
              <div className="filterBar__options--option">
                <label htmlFor="nature">Nature</label>
                <input
                  type="checkbox"
                  id="nature"
                  name="nature"
                  value="nature"
                />
              </div>
              <div className="filterBar__options--option">
                <label htmlFor="entertainment">Entertainment</label>
                <input
                  type="checkbox"
                  id="entertainment"
                  name="entertainment"
                  value="entertainment"
                />
              </div>
            </div>
            <button onClick={() => setFilterClicked(false)}>Save</button>
          </div>
        </div>
      )}

      <Header
        sx={{ zIndex: 12 }}
        imageUrl={dummy}
        altText="My Image"
        location={city}
        position="absolute"
      />
      <SearchBar
        sx={{ zIndex: 1 }}
        handleSearchFilterChange={handleSearchFilterChange}
        position="relative"
        setFilterClicked={setFilterClicked}
        filterClicked={filterClicked}
      />
<Box
        className="main__listItems"
        sx={{ position: "relative", top: 75, px: 2, pb: 2 }}
      >
        <Grid
          className="main__listItems--grid"
          container
          spacing={2}
          alignItems="stretch"
        >
          {cityData.map((item, index) => (
            <Grid
              item
              key={index}
              sx={{
                width: listItemWidth,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link
                to={`/detail/${item.id}`}
                onClick={() => handleListItemClick(item.id)}
              >
                <ListItem data={item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <NavBar />

      {uniqueID && (
        <div className="modal-overlay">
          <div className="detailView">
            <div className="detailView__container">
              <div className="detailView__container--left">
                <div className="detailView__container--left__imageContainer">
                  <img src={cityData[uniqueID].imageUrl} alt="" />
                </div>
              </div>
              <div className="detailView__container--right">
                <div className="detailView__container--right__title">
                  <h1>{cityData[uniqueID].title}</h1>
                </div>
                <div className="detailView__container--right__info">
                  <p>{cityData[uniqueID].description}</p>
                </div>
                <div className="detailView__container--right__cta">
                  <button onClick={() => setUniqueID(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;