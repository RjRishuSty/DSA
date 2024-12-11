import React from "react";
import SlidingWindow from "./Pages/DSA/Sliding_window/SlidingWindow";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";


const App = () => {
  return (
    <>
      {/* <Navbar />
      <SlidingWindow />
      <Footer /> */}
      <Login/>
      {/* <Register /> */}
    </>
  );
};

export default App;
