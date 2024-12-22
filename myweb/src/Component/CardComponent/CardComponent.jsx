import { Card, Typography } from "@mui/material";
import Styles from "./CardComponent.module.css";
import React from "react";
import git from "../../assets/git.png";

const CardComponent = ({ skills }) => {
  return (
    <>
      <Card className={Styles.card} key={skills.id}>
        <img className={Styles.img} src={skills.img} alt="Skill" />
        <Typography component="h2" className={Styles.skillText}>
          {skills.text}
        </Typography>
      </Card>
    </>
  );
};

export default CardComponent;
