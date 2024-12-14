import React from "react";
import Styles from '../Layout/Layout.module.css';
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()
  const hiddeNavAndFooter = location.pathname === '/login' || location.pathname === '/register';
  return (
    <>
      {!hiddeNavAndFooter && <Navbar />}
      <main className={Styles.main}>
        <Outlet />
      </main>
      {!hiddeNavAndFooter && <Footer />}
      
    </> 
  );
};

export default Layout;
