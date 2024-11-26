import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Styles from "./SlidingWindow.module.css";
import HeadingBorder from "../../../Component/HeadingBorder/HeadingBorder";
import heroImg from "../../../assets/SlidingWindow.png";

const SlidingWindow = () => {
  return (
    <Container component="section" className={Styles.slidingWindow}>
      <Box component="div">
        <Typography className={Styles.heading}>
          Sliding window algorithm
        </Typography>
        <HeadingBorder />
      </Box>
      <Box component="div" mt={5}>
        <Grid container>
          <Grid
            item
            md={4}
            sm={5}
            xs={12}
            mb={3}
            // sx={{ border: "2px solid yellow" }}
          >
            <img
              src={heroImg}
              alt="Sliding Window"
              style={{ width: "100%", height: "auto", padding: "15px" }}
            />
          </Grid>
          <Grid
            item
            md={8}
            sm={7}
            xs={12}
            mb={3}
            // sx={{ border: "2px solid yellow" }}
            p={3}
          >
            <Typography
              variant="h4"
              component="h4"
              mb={1}
              sx={{ fontWeight: "600" }}
            >
              What is Sliding?
            </Typography>
            <Typography
              variant="p"
              component="p"
              mb={1}
              sx={{
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
                wordSpacing: "2px",
              }}
            >
              The sliding window algorithm is an efficient technique used to
              solve problems related to subarrays or subsets within a larger
              array or sequence. This algorithm involves creating a "window" (a
              subarray or subset of elements) that slides over the array to
              examine contiguous elements within it. The sliding window approach
              is often used to improve the time complexity of brute-force
              solutions,
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              mb={1}
              mt={2}
              sx={{ fontWeight: "600" }}
            >
              How the Sliding Window Algorithm Works?
            </Typography>
            <Typography component="p" mb={1}>
              The sliding window can be either fixed-size or variable-size,
              depending on the problem requirements:
            </Typography>
            <List>
              <ListItem>
                Fixed-size window: The window size remains constant and slides
                over the array, one element at a time.
              </ListItem>
              <ListItem>
                Variable-size window: The window size can expand or contract
                dynamically as it slides over the array.
              </ListItem>
            </List>
            <Typography variant="h5" component="h5" sx={{ fontWeight: "600" }}>
              Sliding Window Space Complexity and Time Complexity:-
            </Typography>
            <List>
              <ListItem>Time Complexity:- Best Case O(n)</ListItem>
              <ListItem>Space Complexity:- Best Case O(1)</ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SlidingWindow;
