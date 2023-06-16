// import React from "react";
// import { Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import TuneIcon from "@mui/icons-material/Tune";
// import "./styles.css";

// function SearchBar({ updateSearchFilter }) {

//     function handleChange(event) {
//         updateSearchFilter(event.target.value);
//     }

//   return (
//     <div className="search">
//       <div className="search__searchbox">
//         <span className="search_searchbox--searchIcon">
//           <SearchIcon />
//         </span>
//         <input
//           type="text"
//           placeholder="Search..."
//           onChange={handleChange}
//         />
//       </div>
//       <div className="search__filter">
//         <Button>
//           <TuneIcon />
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchBar() {
    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
        >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Choose a guide"
                inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton sx={{ p: "10px" }} aria-label="menu">
                <TuneIcon />
            </IconButton>
        </Paper>
    );
}
