import React from "react";
import Styles from "./Skill.module.css";
import { Box, Container, css, Grid, Typography, useMediaQuery } from "@mui/material";
import HeadingBorder from "../HeadingBorder/HeadingBorder";
import Card from "../CardComponent/CardComponent";
import gitImg from '../../assets/git.png';
import htmlImg from '../../assets/html.png';
import cssImg from '../../assets/css.png';
import jsImg from '../../assets/js.png';
import reactImg from '../../assets/react.png';
import bootstrapImg from '../../assets/bootstrap.png'


const Skill = () => {
  const notBorder = useMediaQuery('(max-width:525px)')
  const skills = [
    {
      id: 1,
      text: "HTML",
      img:htmlImg
    },
    {
      id: 2,
      text: "CSS",
      img:cssImg
    },
    {
      id: 3,
      text: "Bootstrap",
      img:bootstrapImg
    },
    {
      id: 4,
      text: "Javascript",
      img:jsImg
    },
    {
      id: 5,
      text: "React",
      img:reactImg
    },
    {
      id: 6,
      text: "Git",
      img:gitImg
    }
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
