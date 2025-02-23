import React from "react";
import Styles from "./Projects.module.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import CardSwiper from "../../Component/Swiper/CardSwiper";

const Projects = () => {
  return (
    <Stack className={Styles.projectSection}>
      <Container sx={{ border: "2px solid red" }}>
        <Typography variant="h3" color="inherit" textAlign="center">
          Mini - Projects
        </Typography>
        {/* <CardSwiper/> */}
      </Container>
    </Stack>
  );
};

export default Projects;
