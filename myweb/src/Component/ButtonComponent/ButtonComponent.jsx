import { Box, Button, useMediaQuery } from "@mui/material";
import Styles from "./ButtonComponent.module.css";
import React from "react";
import { Link } from "react-router-dom";

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
        >
          Login
        </Button>
      </Link>
      <Link to='register'>
      <Button
        variant="contained"
        color="success"
        size={isRespon ? "small" : "medium"}
      >
        Register
      </Button>
      </Link>
    </Box>
  );
};

export default ButtonComponent;
