import React, { useEffect, useState } from "react";
import Styles from "./ReactPage.module.css";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import ReactImg from "../../assets/react.png";
import { keyFeatures } from "../../ReactNotes.js";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder.jsx";
import CardSwiper from "../../Component/Swiper/CardSwiper.jsx";
import {reactHooks} from '../../ReactHooks.js';

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
          {keyFeatures.map((item,index) => (
            <Grid
              item
              md={item.heading === "State and Props" ? 12 : 6}
              sm={item.heading === "State and Props" ? 12 : 12}
              xs={item.heading === "State and Props" ? 12 : 12}
              key={index}
            >
              {item.heading === "State and Props" ? (
                <Card className={Styles.card} key={index}>
                  <Typography className={Styles.features} component="h3">
                    <span>{item.heading}:</span>
                    {item.items.map((childItem,index) => (
                      <ul className={Styles.list}>
                        <li className={Styles.listItem} key={index}>
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
      <Stack component="section" sx={{ mt: 8, py: 5 }}>
        <Container
          component="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <HeadingBorder context={"borderOne"} />
          <Typography
            variant="h2"
            className={Styles.heading}
            textAlign="center"
            gutterBottom
          >
            Key Features of Hooks
          </Typography>
          <HeadingBorder context={"borderOne"} />
        </Container>
        <Container component="div" sx={{ mt: 4, py: 3 }}>
          <Typography className={Styles.heading}>What is hook?</Typography>
          <Typography component="p" className={Styles.description} gutterBottom>
            A hook is a special function that allows developers to "hook into"
            React features like state, lifecycle methods, and context directly
            from functional components, without the need to use class
            components. Hooks enable cleaner, reusable, and more modular code by
            providing a way to manage component behavior and side effects in a
            more declarative manner.
          </Typography>
          {/*  */}
          <Box component="div" mt={3}>
            <Typography component="h5" className={Styles.subHeading}>
              Benefits of Hook
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={1}>
              <Grid item md={6} sm="12" xs="12">
                <Typography className={Styles.description}>
                  (1) Enable state and side-effects in functional components.
                </Typography>
              </Grid>
              <Grid item md={6} sm="12" xs="12">
                <Typography className={Styles.description}>
                  (2) Promote better reusability and separation of concerns
                  through custom hooks.
                </Typography>
              </Grid>
            </Grid>
            <Typography component="h5" className={Styles.subHeading}>
              Rules of Hook
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item md={6} sm="12" xs="12">
                <Typography className={Styles.description}>
                  (1) Only call hooks at the top level: Don’t call hooks inside
                  loops, conditions, or nested functions.,
                </Typography>
              </Grid>
              <Grid item md={6} sm="12" xs="12">
                <Typography className={Styles.description}>
                  (2) Only call hooks from React functions: Hooks should only be
                  called inside React functional components or custom hooks.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <CardSwiper context={reactHooks} />
      </Stack>
    </Box>
  );
};

export default ReactPage;
