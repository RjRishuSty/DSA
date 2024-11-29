import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [clickedMenu, setClickedMenu] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={Styles.navbar}>
            <Logo />
            <MenuItems />
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
