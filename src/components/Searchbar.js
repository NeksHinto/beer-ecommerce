import React from "react";
import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: 48,
        width: "98%",
        paddingLeft: "16px",
        paddingY: "12px",
        marginY: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Search burger, pizza, drink or etc"
        InputProps={{
          disableUnderline: true,
          style: {
            color: "#C4C4C4",
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton sx={{ padding: "0px" }}>
                <SearchIcon sx={{ color: "#C4C4C4" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
