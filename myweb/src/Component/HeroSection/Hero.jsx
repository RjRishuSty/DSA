import React, { useEffect, useState } from "react";
import Styles from "./Hero.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import myPic from "../../assets/mypic.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const Hero = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/RjRishuSty`
        );
        setProfileData(response.data);
      } catch (error) {
        enqueueSnackbar(`${error.message}`, { variant: "error" });
      }
    };
    fetchData();
  }, []);
  return ( 
    <>
      {profileData ? (
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
                    Hi, my name is <br /> <span>{profileData.name}</span>
                  </Typography>
                  <Typography component="p" className={Styles.description}>
                    {profileData.bio}
                    <Box component="span" sx={{ ml: 1 }}>
                      <Link to="about">learn more...</Link>
                    </Box>
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
                <img
                  src={profileData.avatar_url}
                  alt="Rishu img"
                  className={Styles.myPic}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Typography variant="h4" mt={15} gutterBottom textAlign="center">
          Somethings went wrong.
        </Typography>
      )}
    </>
  );
};

export default Hero;
