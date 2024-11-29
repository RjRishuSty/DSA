import { Typography } from "@mui/material";
import React from "react";
import Styles from './Logo.module.css';

const Logo = ({isMobile}) => {
  return (
    <>
      <Typography variant="h6" component="div" className={isMobile?Styles.mobileLogo:Styles.logo}>
        MERN January
      </Typography>
    </>
  );
};

export default Logo;
