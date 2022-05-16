import * as React from "react";
import '../index.css'

import grid from "../images/grid.svg";

import Navbar from '../components/Navbar';
import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";
import TopPicture from "../components/TopPicture";
import Apply from '../components/Apply';
import Footer from '../components/Footer';


import { useEffect } from "react";

// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignContent: 'flex-start',
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')',
};

const navStyles = {
  backgroundColor: "#A47556",
  border: "2px solid #FBAD24",
  margin: 0,
};

const navLinkStyles = {
  padding: "0.5em 1em",
  fontSize: "1.5em",
  color: "white",
  textDecoration: "none",
};

// markup
const IndexPage = () => {

  useEffect(() => {
    // This runs the script
    const myScript = require('../script.js');
  }, [])
  return (
    <main style={pageStyles}>
      {/* <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet> */}
      <title>WaffleHacks</title>

      <TopPicture />
      
      {/* navbar */}
      <Navbar />

      <div id='content'>

        {/* about */}
        <About />

        {/* tracks */}
        <Tracks />

        {/* faq */}
        <Faq />

        {/* Sponsors */}
        <Sponsors />

        {/* Apply */}
        <Apply />

      </div>

      <Footer />

    </main>
  );
};

export default IndexPage;
