import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Styles from "./DarkMode.module.css";
import { useContext } from "react";

import { DataShareContent } from "../../App";

const DarkMode = () => {
  const { mode, setMode } = useContext(DataShareContent);
  const toggleMode = () => {
    setMode(!mode);
    document.body.classList.toggle("dark-mode", !mode);
    document.body.classList.toggle("light-mode", mode);
  };

  return (
    <IconButton
      onClick={toggleMode}
      color="inherit"
      className={Styles.modeSection}
      sx={{
        border: "2px solid",
        borderColor: mode ? "white" : "black",
        color: mode ? "white" : "black",
        borderRadius: "50%",
        marginRight: "20px",
      }}
    >
      {mode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkMode;
