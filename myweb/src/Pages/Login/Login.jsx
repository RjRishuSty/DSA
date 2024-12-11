import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import Styles from "./Login.module.css";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder";

const Login = () => {
  return (
    <Box className={Styles.loginPage}>
      <Card className={Styles.loginCard}>
        <Box className={Styles.headingSection}>
          <Typography component="h3" className={Styles.heading}>
            Login
          </Typography>
          <HeadingBorder context="borderOne"/>
        </Box>

        <form className={Styles.form}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            className={Styles.input}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            className={Styles.input}
          />
          <Button variant="contained" size="large" sx={{ mt: 2 }} className={Styles.btn}>
            Login
          </Button>
          
        </form>
        <Typography className={Styles.description}>Don't have an account? <span>Register now</span></Typography>
      </Card>
    </Box>
  );
};

export default Login;
