import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkMode = ({ setMode, mode }) => {
  return (
    <IconButton
      onClick={() => setMode(!mode)}
      color="inherit"
      sx={{
        border: "1px solid",
        borderColor: mode ? "#ffffff" : "#ffffff",
        borderRadius: "50%",
        marginRight: "20px",
      }}
    >
      {mode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkMode;
