import React, { useContext } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppContext from "../contexts/app";

const BottomNavbar = () => {
  const { selectedSection, setSelectedSection } = useContext(AppContext);
  const icons = [
    <HomeIcon />,
    <ListIcon />,
    <ShoppingBagOutlinedIcon />,
    <SettingsIcon />,
  ];

  return (
    <BottomNavigation
      sx={{ width: "auto", height: 72, backgroundColor: "background.paper" }}
      value={selectedSection}
      onChange={(event, newIndex) => setSelectedSection(newIndex)}
    >
      {icons.map((icon, index) => (
        <BottomNavigationAction
          key={index}
          icon={icon}
          label={false}
          sx={{
            color: selectedSection === index ? "primary.main" : "#8F8F8F",
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNavbar;
