import { Card,Typography } from "@mui/material";
import Styles from "./CardComponent.module.css";
import React from "react";
import git from "../../assets/git.png";

const CardComponent = () => {
  return (
    <>
      <Card className={Styles.card}>
        <img className={Styles.img} src={git} alt="Skill" />
        <Typography component="h2" className={Styles.skillText}>HTML</Typography>
      </Card>
    </>
  );
};

export default CardComponent;
