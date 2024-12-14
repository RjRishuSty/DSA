import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Styles from "./Login.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const Login = () => {
  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handlearChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handlearSubmit = (e) => {
    e.preventDefault();
    if (validateLogin(loginData)) {
      localStorage.setItem('LogedIn',true);
      enqueueSnackbar('Login Successfully',{variant:'success'});
      navigate('/')
    }
  };
  const validateLogin = (loginData) => {
    if (loginData.username === "") {
      enqueueSnackbar("Username is a required field", { variant: "error" });
      return false;
    }
    if (loginData.password === "") {
      enqueueSnackbar("Password is a required field", { variant: "error" });
      return false;
    }
    if (localStorageData) {
      if (localStorageData.username !== loginData.username) {
        enqueueSnackbar("Username is incorrect.", { variant: "error" });
        return false;
      }
      if (localStorageData.password !== loginData.password) {
        enqueueSnackbar("Password is incorrect.", { variant: "error" });
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const fetchData = localStorage.getItem("RegisterData");
    if (!fetchData) {
      enqueueSnackbar(
        "Sorry, You are new user so first of all please register your usename and password",
        { variant: "error" }
      );
      navigate("/register");
    } else {
      const parse = JSON.parse(fetchData);
      setLocalStorageData(parse);
    }
  }, []);
  console.log("d", localStorageData);
  return (
    <Box className={Styles.loginPage}>
      <Card className={Styles.loginCard}>
        <Box component="div" className={Styles.headingSection}>
          <Box component="div" className={Styles.headingWithBorder}>
            <Typography component="h3" className={Styles.heading}>
              Login
            </Typography>
            <HeadingBorder context="borderOne" />
          </Box>
          <Box component="div">
            <Link to="/">
              {" "}
              <ArrowBackIcon className={Styles.backIcon} />
            </Link>
          </Box>
        </Box>

        <form className={Styles.form} onSubmit={handlearSubmit}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            className={Styles.input}
            onChange={handlearChange}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            className={Styles.input}
            onChange={handlearChange}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            className={Styles.btn}
            type="submit"
          >
            Login
          </Button>
        </form>
        <Typography className={Styles.description}>
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register now</span>
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Login;
