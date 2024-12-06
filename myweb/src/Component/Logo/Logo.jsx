import { Box } from "@mui/material";
import React from "react";
import Styles from "./Logo.module.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";

const Logo = () => {
  return (
    <Box component="div" className={Styles.logoSection}>
      <LaptopMacIcon className={Styles.logoIcon} />
      <CodeIcon className={Styles.codeIcon} />
    </Box>
  );
};

export default Logo;
