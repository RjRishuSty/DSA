import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Styles from './DarkMode.module.css';

const DarkMode = ({ setMode, mode }) => {
  return (
    <IconButton
      onClick={() => setMode(!mode)}
      color="inherit"
      className={Styles.modeSection}
      sx={{
        border: "1px solid",
        borderColor: mode ? "white" : "black",
        borderRadius: "50%",
        marginRight: "20px",
      }}
    >
      {mode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkMode;
