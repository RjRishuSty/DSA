import React from "react";
import Styles from '../Layout/Layout.module.css';
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        <Outlet />
      </main>
      <Footer />
    </> 
  );
};

export default Layout;
