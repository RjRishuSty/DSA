import React, { useEffect, useState } from "react";
import Styles from "./Register.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (validateInputData(formData)) {
      localStorage.setItem("RegisterData", JSON.stringify(formData));
      enqueueSnackbar("Registered successfully", { variant: "success" });
    }
  };

  const validateInputData = (formData) => {
    if (formData.username === "") {
      enqueueSnackbar("Username is a required field", { variant: "error" });
      return false;
    }
    if (formData.username.length < 6) {
      enqueueSnackbar("Username must be at least 6 characters", {
        variant: "error",
      });
      return false;
    }
    if (formData.password === "") {
      enqueueSnackbar("Password is a required field", { variant: "error" });
      return false;
    }
    if (formData.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "error",
      });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      enqueueSnackbar("Passwords do not match", { variant: "error" });
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!localStorage.getItem("RegisterData")) {
      localStorage.setItem("RegisterData", []);
    }
  }, []);

  return (
    <Box className={Styles.registerPage}>
      <Card className={Styles.registerCard}>
        <Box className={Styles.headingSection}>
          <Box component="div" className={Styles.headingWithBorder}>
            <Typography component="h3" className={Styles.heading}>
              Register
            </Typography>
            <HeadingBorder context="borderOne" />
          </Box>
          <Box component="div">
            <Link to="/">
              <ArrowBackIcon className={Styles.backIcon} />
            </Link>
          </Box>
        </Box>

        <form className={Styles.form} onSubmit={submitForm}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            className={Styles.input}
            onChange={inputChangeHandler}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            className={Styles.input}
            onChange={inputChangeHandler}
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            className={Styles.input}
            onChange={inputChangeHandler}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            className={Styles.btn}
          >
            Register
          </Button>
        </form>
        <Typography className={Styles.description}>
          Already have an account? <Link to="/login"><span>Login here</span></Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Register;
