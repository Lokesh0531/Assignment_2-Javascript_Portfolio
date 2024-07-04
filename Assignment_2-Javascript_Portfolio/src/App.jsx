/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Lokesh Bhatu Chaudhari",
  title: "Web Designer & UI/UX Designer",
  email: "chaudharilokesh0531.com",
  gitHub: "https://github.com/Lokesh0531",
  instagram: "https://www.instagram.com/its_lokesh_15.4/",
  linkedIn: "https://www.linkedin.com/in/lokesh-chaudhari-8881a1194/",
  medium: "https://medium.com/@chaudharilokesh0531",
  twitter: "https://x.com/Lokesh1542003",``
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
