import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FilterPill = ({ text, icon, active, onClick }) => {
  const handleToggle = () => {
    onClick(text);
  };

  const StyledBox = styled(Box)(({ theme, active }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: theme.shape.borderRadius,
    padding: "18px",
    gap: "8px",
    cursor: "pointer",
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.background.paper,
    color: active ? theme.palette.background.paper : theme.palette.text.primary,
  }));

  return (
    <StyledBox active={active} onClick={handleToggle}>
      {icon && <img src={icon} alt={text} width="20" height="20" />}
      <Typography variant="subtitle1">{text}</Typography>
    </StyledBox>
  );
};

export default FilterPill;
