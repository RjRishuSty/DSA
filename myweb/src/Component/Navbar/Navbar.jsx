import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import DarkMode from "../DarkMode/DarkMode";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [clickedMenu, setClickedMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Box component="nav" className={Styles.navbarSection}>
        <AppBar position="static">
          <Toolbar className={Styles.navbar}>
            <Logo />
            {!isMobile && (
              <Box component="div" className={Styles.menuSection}>
                <MenuItems />
                <ButtonComponent />
              </Box>
            )}
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setClickedMenu(!clickedMenu)}
              >
                <MenuIcon className={Styles.menuIcon} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        {isMobile && (
          <Box className={clickedMenu ? Styles.afterClickMenu : Styles.sideBar}>
            <Box className={Styles.brandSection}>
              <Logo isMobile={isMobile} />
              <CloseIcon
                className={Styles.closeIcon}
                onClick={() => setClickedMenu(!clickedMenu)}
              />
            </Box>
            <MenuItems isMobile={isMobile} />
          </Box>
        )}
      </Box>
    </>
  );
};
