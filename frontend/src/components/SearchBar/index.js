import React from "react";
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import "./styles.css";

function SearchBar() {
    return (
        <div className="search">
            <div className="search__searchbox">
            <input type="text" placeholder="Search..."></input>
            </div>
            <div className="search__filter">
                <Button>
                    <TuneIcon />
                </Button>
            </div>
        </div>
    );
}

export default SearchBar;
