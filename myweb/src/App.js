import React, { createContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Component/Layout/Layout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ReactPage from "./Pages/React/ReactPage";
import HtmlPage from "./Pages/HTML/HtmlPage";
import HookPage from "./Pages/HookPage/HookPage";

export const DataShareContent = createContext();

const App = () => {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    const saveMode = localStorage.getItem("Mode");
    saveMode
      ? localStorage.setItem("Mode", mode ? "dark" : "light")
      : localStorage.setItem("Mode", mode ? "dark" : "light");
  }, [mode]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="learn-react" element={<ReactPage />} />
        <Route path="learn-react/:hookName" element={<HookPage />} />
        <Route path="html-notes" element={<HtmlPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );
  return (
    <DataShareContent.Provider value={{ mode, setMode }}>
      <RouterProvider router={router} />
    </DataShareContent.Provider>
  );
};

export default App;
