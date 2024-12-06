import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [clickedMenu, setClickedMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={Styles.navbar}>
            <Logo />
            <MenuItems />
            {!isMobile && (
                <Box component="div" className={Styles.buttonSection}>
                  <IconButton
                    onClick={toggleDarkMode}
                    color="inherit"
                    sx={{
                      border: "1px solid",
                      borderColor: darkMode ? "#ffffff" : "#000000",
                      borderRadius: "50%",
                      marginRight: "20px",
                    }}
                  >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                  <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    sx={{
                      marginRight: "20px",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="medium"
                  >
                    Register
                  </Button>
                </Box>
            )}
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon
                  className={Styles.menuIcon}
                  onClick={() => setClickedMenu(!clickedMenu)}
                />
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
