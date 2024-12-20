import React from "react";
import Styles from "./Skill.module.css";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import HeadingBorder from "../HeadingBorder/HeadingBorder";
import Card from "../CardComponent/CardComponent";

const Skill = () => {
  const notBorder = useMediaQuery('(max-width:525px)')
  const skills = [
    {
      id: 1,
      item: "HTML",
    },
    {
      id: 2,
      item: "CSS",
    },
    {
      id: 3,
      item: "Bootstrap",
    },
    {
      id: 4,
      item: "Javascript",
    },
    {
      id: 5,
      item: "React",
    },
    {
      id: 6,
      item: "Git",
    },
    {
      id: 3,
      item: "Bootstrap",
    },
    {
      id: 4,
      item: "Javascript",
    },
    {
      id: 5,
      item: "React",
    },
    {
      id: 6,
      item: "Git",
    },
  ];
  return (
    <Box component="section" className={Styles.skillSection}>
      <Container component="div">
        <Box component="div" className={Styles.headingBox}>
          <Typography className={Styles.heading} component="h2">
            Skills required
          </Typography>
          {!notBorder?<HeadingBorder />:""}
          
        </Box>
        <Grid container className={Styles.skillBox} spacing={2}>
          {skills.map((item) => (
            <Grid
              item
              md={2}
              sm={4}
              xs={6}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Card skills={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skill;
