
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({handleSearchFilterChange}) {

        function handleChange(event) {

            handleSearchFilterChange(event.target.value);
        }
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
                onChange={handleChange}
                
            />
            <IconButton sx={{ p: "10px" }} aria-label="menu">
                <TuneIcon />
            </IconButton>
        </Paper>
    );
}
