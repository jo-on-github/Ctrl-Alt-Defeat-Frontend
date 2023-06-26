// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import TuneIcon from "@mui/icons-material/Tune";
// import SearchIcon from "@mui/icons-material/Search";
// import Checkbox from "@mui/material/Checkbox";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import listItemData from "../../dummyData/listItemData";
// import { useState } from "react";

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// export default function SearchBar({ handleSearchFilterChange, setFilterClicked, filterClicked }) {

//     function handleChange(event) {
//         handleSearchFilterChange(event.target.value);
//     }

//     function handleClick() {
//         console.log("clicked");
//         setFilterClicked(!filterClicked);
//     }

//     return (
//         <Paper
//             component="form"
//             sx={{
//                 // p: "2px 4px",
//                 // flex: 1,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "100vw",
//                 position: "relative",
//                 top: 60,
//                 left: 0,
//                 // pb: 1,
//                 // pt: 1,
//                 // mb: 2,
//                 // backgroundColor: "pink",
//                 // mt: 9,
//                 // mb: 20,
//                 // ml: 5,
//                 // mr: 5,
//             }}
//         >
//             {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//                 <SearchIcon />
//             </IconButton> */}
//             <Autocomplete
//                 sx={{
//                     flex: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     width: 200,
//                     ml: 2,
//                     // backgroundColor: "green",
//                 }}
//                 placeholder="Choose a guide"
//                 multiple
//                 id="checkboxes-tags-demo"
//                 options={listItemData}
//                 disableCloseOnSelect
//                 getOptionLabel={(option) => option.title}
//                 renderOption={(props, option, { selected }) => (
//                     <li {...props}>
//                         <Checkbox
//                             icon={icon}
//                             checkedIcon={checkedIcon}
//                             style={{ marginRight: 8 }}
//                             checked={selected}
//                         />
//                         {option.title}
//                     </li>
//                 )}
//                 style={{ width: 500 }}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         label="Choose a Guide"
//                         placeholder="Favorites"
//                     />
//                 )}
//             />
//             {/* <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Choose a guide"
//                 inputProps={{ "aria-label": "search google maps" }}
//                 onChange={handleChange}
                
//             /> */}
//             <IconButton
//                 sx={{ p: "10px" }}
//                 aria-label="menu"
//                 onClick={handleClick}
//             >
//                 <TuneIcon />
//             </IconButton>
//         </Paper>
//     );
// }


import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useTheme } from "@mui/material/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchBar({ setFilterClicked, filterClicked, handleCheckboxChange, chosenCity }) {
    const theme = useTheme();


    function handleClick() {
        console.log("clicked");
        setFilterClicked(!filterClicked);
    }

    return (
        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
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
            <Autocomplete
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
                placeholder="Choose a guide"
                multiple
                id="checkboxes-tags-demo"
                options={chosenCity}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            onChange={handleCheckboxChange}
                        />
                        {option.title}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a Guide"
                        placeholder="Favorites"
                    />
                )}
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