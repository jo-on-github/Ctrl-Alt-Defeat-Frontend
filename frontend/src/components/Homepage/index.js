import React from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";
import listItemData from "../../dummyData/listItemData";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

function Homepage({ city, updateSearchFilter }) {
    const [searchFilter, setSearchFilter] = React.useState(null);
    const matches = useMediaQuery("(min-width: 833px)");
    const matches2 = useMediaQuery("(min-width: 1279px) ");

    const handleSearchFilterChange = (searchFilter) => {
        setSearchFilter(searchFilter);
    };

    return (
        <div className="overlay">
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
            />

            <Box className="main__listItems" sx={{ flexGrow: 1 }}>
                <Grid className="main__listItems--grid" container spacing={2}>
                    {listItemData.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Link to="/guide/overview">
                                <ListItem title={item.title} />
                            </Link>
                        </Grid>
                    ))}
                    {matches && (
                        <Grid item xs={12} sm={6} md={4}>
                            <ListItem />
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
