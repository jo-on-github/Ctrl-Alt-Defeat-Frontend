import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButton() {
    return (
        <Box
            sx={{
                "& > :not(style)": { m: 1 },
                position: "fixed",
                bottom: 65,
                right: 10,
            }}
        >
            <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
            >
                <AddIcon sx={{ mr: 1 }} />
                New trip
            </Fab>
        </Box>
    );
}
