import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    //controls state of buttons to highlight when clicked
    const [value, setValue] = React.useState(0);

    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
        >
            <BottomNavigation
                // showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <Link to={"/home"}>
                    <BottomNavigationAction
                        label="Home"
                        icon={<HomeOutlinedIcon />}
                    />
                </Link>
                <Link to={"/planner"}>
                    <BottomNavigationAction
                        label="planner"
                        icon={<AddBoxOutlinedIcon />}
                    />
                </Link>
                <Link to={"/Favourites"}>
                    <BottomNavigationAction
                        label="Favourites"
                        icon={<BookmarkBorderOutlinedIcon />}
                    />
                </Link>
            </BottomNavigation>
        </Paper>
    );
}

export default NavBar;

//OLD CODE WITH BUTTONS BEFORE SWITCHED TO BOTTOMNAVBAR COMPONENTS FROM MUI
//override style of button to black
// const buttonStyle = {
//     color: "black",
// };

/* <div className="navBar">
<div className="navBar__btn--home">
    <Button style={buttonStyle}>
        <HomeOutlinedIcon />
    </Button>
</div>
<div className="navBar__btn--itinerary">
    <Button style={buttonStyle}>
        <MapOutlinedIcon />
    </Button>
</div>
<div className="navBar__btn--map">
    <Button style={buttonStyle}>
        <LocationOnOutlinedIcon />
    </Button>
</div>
<div className="navBar__btn--favourites">
    <Button style={buttonStyle}>
        <BookmarkBorderOutlinedIcon />
    </Button>
</div>
</div> */
