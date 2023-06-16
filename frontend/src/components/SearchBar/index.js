import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import "./styles.css";

function SearchBar({ updateSearchFilter }) {
  

    function handleChange(event) {
        updateSearchFilter(event.target.value);
    }

  return (
    <div className="search">
      <div className="search__searchbox">
        <span className="search_searchbox--searchIcon">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
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