import React, { useEffect, useState } from "react";
import Styles from "./ReactPage.module.css";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import ReactImg from "../../assets/react.png";
import { keyFeatures } from "../../ReactNotes.js";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder.jsx";

const ReactPage = () => {
  return (
    <Box component="section" className={Styles.ReactMainSection}>
      <Container component="div" className={Styles.ReactSection}>
        <Grid container>
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={ReactImg} alt="React.js" className={Styles.img} />
          </Grid>
          <Grid
            item
            md={7}
            sm={12}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start", 
              flexDirection: "column",
            }}
          >
            <Typography component="h1" className={Styles.heading}>
              What is React.js?
            </Typography>
            <Typography component="p" className={Styles.description}>
              React is a popular JavaScript library used for building user
              interfaces, especially for single-page applications (SPAs). It is
              maintained by Facebook and a community of developers. React is
              component-based, meaning that the UI is divided into reusable
              pieces called components.
            </Typography>
          </Grid>
        </Grid>
        <Box component="div" className={Styles.aboutReact}>
          <HeadingBorder />
          <Typography
            className={Styles.heading}
            component="h1"
            sx={{ textAlign: "center" }}
          >
            Key Features of React.js
          </Typography>
          <HeadingBorder />
        </Box>
      </Container>
      <Box component="div" className={Styles.keyFeaturesSection}>
        <Grid container spacing={2}>
          {keyFeatures.map((item) => (
            <Grid
              item
              md={item.heading === "State and Props" ? 12 : 6}
              sm={item.heading === "State and Props" ? 12 : 12}
              xs={item.heading === "State and Props" ? 12 : 12}
            >
              {item.heading === "State and Props" ? (
                <Card className={Styles.card}>
                  <Typography className={Styles.features} component="h3">
                    <span>{item.heading}:</span>
                    {item.items.map((childItem) => (
                      <ul className={Styles.list}>
                        <li className={Styles.listItem}>
                          <span>{childItem.name}:</span>
                          {childItem.description}
                        </li>
                      </ul>
                    ))}
                  </Typography>
                </Card>
              ) : (
                <Card className={Styles.card}>
                  <Typography className={Styles.features} component="h3">
                    <span>{item.heading}:</span> {item.description}
                  </Typography>
                </Card>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ReactPage;
