import { Box, Button, useMediaQuery } from "@mui/material";
import Styles from "./ButtonComponent.module.css";
import React from "react";

const ButtonComponent = () => {
  const isRespon = useMediaQuery("(max-width:1111px)");
  return (
    <Box className={Styles.btnSection}>
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
      <Button variant="contained" color="success" size={isRespon ? "small" : "medium"}>
        Register
      </Button>
    </Box>
  );
};

export default ButtonComponent;
