import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  Paper,
} from "@mui/material";
import Styles from "./HookPage.module.css";
import { useParams } from "react-router-dom";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder";
import { reactHooks } from "../../ReactHooks.js";

const HookPage = () => {
  const { hookName } = useParams();
  const [hook, setHook] = useState([]);

  useEffect(() => {
    const filtered = reactHooks.filter((item) => hookName === item.title);
    console.log(filtered, "useEffect");
    setHook(filtered);
  }, [hookName]);

  return (
    <Stack component="section" sx={{ border: "2px solid", py: 5 }}>
      {hook.length > 0 ? (
        hook.map((item) => (
          <Container sx={{ mt: 9 }}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HeadingBorder context={"borderOne"} />
              <Typography
                component="h2"
                variant="h2"
                gutterBottom
                className={Styles.heading}
              >
                {item.title}
              </Typography>
              <HeadingBorder context={"borderOne"} />
            </Box>
            <Box sx={{ mt: 4 }}>
              <Grid container rowSpacing={2} columnSpacing={4}>
                <Grid
                  item
                  md={5}
                  sm={12}
                  xs={12}
                  display="flex "
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Card
                    sx={{
                      backgroundColor: "transparent",
                      borderRadius: "20px",
                    }}
                  >
                    <CardMedia
                      sx={{
                        backgroundPosition: "center",
                        borderRadius: "20px",
                      }}
                      component="img"
                      alt={item.title}
                      image={item.img || "https://via.placeholder.com/150"}
                    />
                  </Card>
                </Grid>
                <Grid
                  item
                  md={7}
                  sm={12}
                  xs={12}
                  display="flex "
                  justifyContent="center"
                  alignItems="start"
                  flexDirection="column"
                >
                  <Typography
                    gutterBottom
                    component="h4"
                    variant="h4"
                    className={Styles.heading}
                  >
                    {item.description.question}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="p"
                    variant="subtitle1"
                    className={Styles.description}
                  >
                    {item.description.answer}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="p"
                    variant="subtitle2"
                    className={Styles.syntex}
                  >
                    {item.description.syntax}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ border: "2px solid", py: 5, mt: 9 }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HeadingBorder />
                <Typography variant="h3" className={Styles.heading}>
                  About useState
                </Typography>
                <HeadingBorder />
              </Box>
              {item.subTitle.map((title) => (
                <Paper elevation={4} sx={{ padding: "20px", margin: "20px" }}>
                  <Typography className={Styles.subHeading} variant="h5">
                    {title.name}
                  </Typography>
                  {title.name === "Key Features" &&
                    item.features.map((featur) => (
                      <>
                        <Typography
                          className={Styles.subHeading}
                          variant="overline"
                          display="flex"
                          justifyContent="start"
                          alignItems="center"
                        >
                          <Typography color="error.main" variant="h4">*</Typography>
                          {featur.name}:- <span>hello</span>
                        </Typography>
                        <span
                          className={Styles.description}
                          variant="subtitle2"
                          sx={{ letterSpacing: "1px" }}
                        >
                          {featur.desc}
                        </span>
                      </>
                    ))}
                </Paper>
              ))}
            </Box>
          </Container>
        ))
      ) : (
        <Container sx={{ mt: 9 }}>
          <Typography
            component="h2"
            variant="h2"
            gutterBottom
            className={Styles.heading}
          >
            Not Found
          </Typography>
        </Container>
      )}
    </Stack>
  );
};

export default HookPage;
