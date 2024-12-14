import React from "react";
import {
  Box,
  darkScrollbar,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import HeadingBorder from "../HeadingBorder/HeadingBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const notes = [
    { item: "HTML" },
    { item: "CSS" },
    { item: "DSA" },
    { item: "JavaScript" },
    { item: "Bootstrap - 5" },
  ];

  const menus = [
    { item: "Home", path: "/" },
    { item: "About", path: "about" },
    { item: "Contact", path: "contact" },
    { item: "Sprint", path: "sprint" },
    { item: "DSA", path: "dsa" },
    { item: "Login", path: "login" },
    { item: "Register", path: "register" },
  ];

  return (
    <Box component="footer" className={Styles.footer}>
      <Grid container>
        <Grid item className={Styles.footerItems} md={4} sm={6} xs={12}>
          <Logo context="footer" />
          <Typography component="p" className={Styles.description}>
            I’m Rishu Raj, a passionate Frontend Developer and MERN Stack
            Enthusiast from Bihar, India. I graduated with a BCA degree in 2023
            and have been building modern, responsive, and{" "}
            <span>learn more...</span>
          </Typography>
        </Grid>
        <Grid item className={Styles.footerItems} md={4} sm={6} xs={12}>
          <Box component="div" className={Styles.headingSection}>
            <Typography component="h4" className={Styles.heading}>
              Menu
            </Typography>
            <HeadingBorder context="borderTwo" />
          </Box>
          <List>
            {menus.map((tutorial) => (
              <ListItem disablePadding key={tutorial.item}>
                <NavLink
                  to={tutorial.path}
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? Styles.inActive : Styles.unActive
                  }
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIcon
                        sx={{ fontSize: "1.5rem", color: "#1976d2" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={tutorial.item}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item className={Styles.footerItems} md={4} sm={12} xs={12}>
          <Box component="div" className={Styles.headingSection}>
            <Typography component="h4" className={Styles.heading}>
              Notes
            </Typography>
            <HeadingBorder context="borderTwo" />
          </Box>
          <List>
            {notes.map((tutorial) => (
              <ListItem disablePadding key={tutorial.item}>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowForwardIcon
                      sx={{ fontSize: "1.5rem", color: "#1976d2" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={tutorial.item} style={{color:'white'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
