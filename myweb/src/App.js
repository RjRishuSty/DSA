import React from "react";
import SlidingWindow from "./Pages/DSA/Sliding_window/SlidingWindow";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <SlidingWindow />
      <Footer />
    </>
  );
};

export default App;
