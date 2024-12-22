
import React from "react";
import Styles from "./Logo.module.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";

const Logo = ({ context }) => {
  const isFooter = context === "footer";
  return (
    <Link to="/" component="a" className={Styles.logoSection}>
      <LaptopMacIcon
        className={isFooter ? Styles.footerLogoColor : Styles.logoIcon}
      />
      <CodeIcon
        className={isFooter ? Styles.footerCodeIcon : Styles.codeIcon}
      />
    </Link>
  );
};

export default Logo;
