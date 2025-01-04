import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Styles from "./CardSwiper.module.css";
import { NavLink } from "react-router-dom";

const CardSwiper = ({ context }) => {
  return (
    <Stack sx={{ mt: 3, p: 2 }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        className={Styles.mySwipper}
        spaceBetween={20}
      >
        {context.map((item) => (
          <SwiperSlide key={item.title}>
            <NavLink to={`${item.title}`}>
              <Card className={Styles.card}>
                <CardContent>
                  <Typography className={Styles.heading}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
export default CardSwiper;
