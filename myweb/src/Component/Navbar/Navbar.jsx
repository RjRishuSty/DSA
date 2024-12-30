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
  const [logedIn, setLogedIn] = useState(() => {
    const login = localStorage.getItem("LogedIn");
    return login ? true : false;
  });
  return (
    <>
      <Box component="nav" className={Styles.navbarSection}>
        <AppBar position="static" style={{ boxShadow: "none" }}>
          <Toolbar className={Styles.navbar}>
            <Logo context="navbar" />
            {!isMobile && (
              <Box component="div" className={Styles.menuSection}>
                <MenuItems />
                {!logedIn && <ButtonComponent />}
              </Box>
            )}
            {isMobile && (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="black"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <DarkMode />
                  <MenuIcon
                    className={Styles.menuIcon}
                    onClick={() => setClickedMenu(!clickedMenu)}
                  />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
        {isMobile && (
          <Box className={clickedMenu ? Styles.afterClickMenu : Styles.sideBar}>
            <Box className={Styles.brandSection}>
              <Logo context="navbar" />
              <CloseIcon
                className={Styles.closeIcon}
                onClick={() => setClickedMenu(!clickedMenu)}
              />
            </Box>
            <MenuItems isMobile={isMobile} />
          </Box>
        )}
        {!isMobile && (
          <Box
            style={{
              position: "fixed",
              top: "60vh",
              right: "0px",
            }}
          >
            <DarkMode />
          </Box>
        )}
      </Box>
    </>
  );
};
