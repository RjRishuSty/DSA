import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import htmlImg from "../../assets/html.png";
import Styles from "./HtmlPage.module.css";
import HeadingBorder from "../../Component/HeadingBorder/HeadingBorder";
import { aboutHtml } from "../../HtmlNotes.js";
const HtmlPage = () => {
  console.log(aboutHtml);
  return (
    <Stack
      component="section"
      spacing={2}
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt:10
      }}
    >
      <Container >
        <Grid container>
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={htmlImg} alt="HTML" className={Styles.img} />
          </Grid>
          <Grid
            item
            md={7}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography component="h3" variant="h3" className={Styles.heading}>
              What is HTML?
            </Typography>
            <Typography component="p" className={Styles.description}>
              HTML stands for HyperText Markup Language. and it the standard
              language used to create web pages. It defines the structure of web
              pages by using a system of tags to describe elements like
              headings, paragraphs, links, images, and more.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        component="div"
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadingBorder />
        <Typography
          component="h2"
          variant="h2"
          className={Styles.heading}
          sx={{ textAlign: "center" }}
        >
          HTML Questions
        </Typography>

        <HeadingBorder />
      </Container>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "auto",
          padding: "70px 20px",
        }}
        className={Styles.aboutHtml}
      >
        <Grid container rowSpacing={3} columnSpacing={3}>
          {aboutHtml.map((notes, index) => (
            <Grid item md={6} sm={12} xs={12} key={index}>
              <Card sx={{ boxShadow: "0px 0px 5px black",padding:'15px',cursor:'pointer' }} className={Styles.card}>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={Styles.question}
                  >
                    {notes.question}
                  </Typography>
                  <Typography variant="subtitle1" className={Styles.answer}>
                    {notes.answer}
                    {notes.item && (
                      <ul>
                        {notes.item.map((part) => (
                          <li>
                            <span style={{fontWeight:700}}>{part.name}: </span>
                            {part.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default HtmlPage;
