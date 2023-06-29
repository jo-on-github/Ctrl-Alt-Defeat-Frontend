import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

export default function SearchBar({ setFilterClicked, filterClicked, setSelectedTitle }) {
    const theme = useTheme();

    function handleClick() {
        console.log("clicked");
        setFilterClicked(!filterClicked);
    }

    function handleSearch(event) {
        setSelectedTitle(event.target.value);
    }

    return (
        <Paper
            component="form"
            sx={{
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 60,
                width: "100%",
                px: 2,
                py: 1,
                mb: 2,
                [theme.breakpoints.up("sm")]: {
                    px: 4,
                },
                [theme.breakpoints.up("md")]: {
                    px: 6,
                },
                [theme.breakpoints.up("lg")]: {
                    px: 8,
                },
                [theme.breakpoints.up("xl")]: {
                    px: 10,
                },
            }}
        >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <TextField
                sx={{
                    flex: 1,
                    mr: 2,
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: 300,
                    },
                    [theme.breakpoints.up("lg")]: {
                        width: 400,
                    },
                    [theme.breakpoints.up("xl")]: {
                        width: 500,
                    },
                }}
                label="Choose a Guide"
                placeholder="Guides"
                onChange={handleSearch}
            />
            <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                onClick={handleClick}
            >
                <TuneIcon />
            </IconButton>
        </Paper>
    );
}
