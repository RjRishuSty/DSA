import React from "react";
import Styles from "./MenuItems.module.css";
import { Box, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
export const menu = [
  { menuItem: "Home", path: "/" },
  { menuItem: "About", path: "about" },
  { menuItem: "Contact", path: "contact" },
  { menuItem: "Sprint", path: "sprint" },
  { menuItem: "DSA", path: "dsa" },
  { menuItem: "HRML", path: "html" },
  { menuItem: "CSS", path: "css" },
];
const MenuItems = ({ isMobile }) => {
  return (
    <Box className={isMobile ? Styles.isMobileMenu : Styles.menu}>
      {menu.map((item) => (
        <MenuItem key={item.menuItem}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `${isMobile ? Styles.mobileItem : Styles.menuItem} ${
                isActive ? Styles.active : Styles.menuItem
              }`
            }
            aria-label={item.menuItem}
          >
            {item.menuItem}
          </NavLink>
        </MenuItem>
      ))}
    </Box>
  );
};

export default MenuItems;
