import React from "react";
import Styles from "./HeadingBorder.module.css";

const HeadingBorder = ({ context }) => {
  const border = context === "borderTwo";
  return (
    <>
      <hr 
        className={border ? Styles.borderTwo : Styles.borderOne}
      />
    </>
  );
};

export default HeadingBorder;
