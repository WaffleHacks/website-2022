import * as React from "react";
import '../index.css'
import landing_page from "../images/landing_page.png";
import grid from "../images/grid.svg";

import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";

// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')'
};

const navStyles = {
  backgroundColor: "#A47556",
  border: "2px solid #FBAD24",
  margin: "0",
};

const navLinkStyles = {
  padding: "0.5em 1em",
  fontSize: "1.5em",
  color: "white",
  textDecoration: "none",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>WaffleHacks</title>
      {/* top image */}
      <img src={landing_page} alt="placeholder" width="100%" />

      {/* navbar */}
      <nav style={navStyles}>
        <div id='nav-lg' style={{display: 'flex', justifyContent: "center"}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <a href="#tracks" style={navLinkStyles}>
            tracks
          </a>
          <a href="#faqs" style={navLinkStyles}>
            faqs
          </a>
          <a href="#sponsors" style={navLinkStyles}>
            sponsors
          </a>
          <a href="#apply" style={navLinkStyles}>
            apply
          </a>
        </div>

        <div id='nav-sm' style={{justifyContent: "center", alignItems: 'center'}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <span>– – –</span>
        </div>
      </nav>

      {/* about */}
      <About />

       {/* tracks */}
       <Tracks />

       {/* faq */}
       <Faq />

       {/* Sponsors */}
       <Sponsors />
    </main>
  );
};

export default IndexPage;
