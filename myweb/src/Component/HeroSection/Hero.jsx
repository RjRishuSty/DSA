import React from "react";
import Styles from "./Hero.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import myPic from "../../assets/mypic.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box component="section" className={Styles.heroSection}>
      <Container>
        <Grid container>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{ order: { md: 1, sm: 2, xs: 2 } }}
          >
            <Box className={Styles.intro}>
              <Typography component="h4" className={Styles.heading}>
                Hi, my name is <br /> <span>Rishu Raj</span>
              </Typography>
              <Typography component="p" className={Styles.description}>
                I’m Rishu Raj, a passionate Frontend Developer and MERN Stack
                Enthusiast from Bihar, India. I graduated with a BCA degree in
                2023 and have been building modern, responsive, and{" "}
                <span><Link to="about">learn more...</Link></span>
              </Typography>
            </Box>
            <Box component="div" className={Styles.contactInfo}>
              <Typography component="h4" className={Styles.contactText}>
                <Link to="tel:+91790333504">+917903335804</Link>
              </Typography>
              <Typography component="h4" className={Styles.contactText}>
                <Link to="mailto:rishurajk59@gmail.com">
                  {" "}
                  rishurajk59@gmail.com
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              order: { md: 2, sm: 1, xs: 1 },
              marginBottom: { sm: 5, xs: 5 },
            }}
            className={Styles.imgGrid}
          >
            <img src={myPic} alt="Rishu img" className={Styles.myPic} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
