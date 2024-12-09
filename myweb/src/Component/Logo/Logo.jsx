import { Box } from "@mui/material";
import React, { useState } from "react";
import Styles from "./Logo.module.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";

const Logo = ({context}) => {
  const isFooter = context === "footer";
  return (
    <Box component="div" className={Styles.logoSection}>
      <LaptopMacIcon className={isFooter?Styles.footerLogoColor:Styles.logoIcon} />
      <CodeIcon className={isFooter?Styles.footerCodeIcon:Styles.codeIcon} />
    </Box>
  );
};

export default Logo;
 