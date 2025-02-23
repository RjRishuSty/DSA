import { Box, Button, useMediaQuery } from "@mui/material";
import Styles from "./ButtonComponent.module.css";
import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const ButtonComponent = () => {
  const isRespon = useMediaQuery("(max-width:1111px)");
  return (
    <Box className={Styles.btnSection}>
      <Link to='login'>
        <Button
          variant="contained"
          color="success"
          size={isRespon ? "small" : "medium"}
          sx={{
            marginRight: "20px",
          }}
          startIcon={<LoginIcon/>}
        >
          Login
        </Button>
      </Link>
      <Link to='register'>
      <Button
        variant="contained"
        color="success"
        size={isRespon ? "small" : "medium"}
        startIcon={<HowToRegIcon/>}
      >
        Register
      </Button>
      </Link>
    </Box>
  );
};

export default ButtonComponent;
