import React, { useContext } from "react";
import { Box } from "@mui/material";
import FilterPill from "../components/FilterPill";
import AppContext from "../contexts/app";
import filters from "../constants/filters";

const Filters = () => {
  const { loading, error, selectedFilter, setSelectedFilter } =
    useContext(AppContext);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "26px", mb: 3 }}>
      {filters.map((filter) => (
        <FilterPill
          key={filter.text}
          text={filter.text}
          icon={filter.icon}
          active={selectedFilter === filter.value}
          onClick={() => !loading && !error && setSelectedFilter(filter.value)}
        />
      ))}
    </Box>
  );
};

export default Filters;
