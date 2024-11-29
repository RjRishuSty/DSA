import React from "react";
import Styles from "./MenuItems.module.css";
import { Box, MenuItem } from "@mui/material";

const MenuItems = ({isMobile}) => {
  return (
    <Box className={isMobile?Styles.isMobileMenu:Styles.menu}>
      <MenuItem className={Styles.menuItem}>Home</MenuItem>
      <MenuItem className={Styles.menuItem}>About</MenuItem>
      <MenuItem className={Styles.menuItem}>Contact</MenuItem>
      <MenuItem className={Styles.menuItem}>DSA</MenuItem>
      <MenuItem className={Styles.menuItem}>HTML</MenuItem>
      <MenuItem className={Styles.menuItem}>JavaScript</MenuItem>
    </Box>
  );
};

export default MenuItems;
