import * as React from "react";
import '../index.css'
import landing_page from "../images/landing_page.png";
import note_tape_long from "../images/note_tape_long.svg";
import about_graphic from "../images/about_graphic.png";
import pointer_sign from "../images/pointer_sign.svg";


// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DDBC9B",
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
      <div
        id="about"
        style={{
          padding: "4em 0em",
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >

        <div
          style={{
            display: "inline-block",
            position: "relative",
            backgroundColor: "#FDF4EF",
            padding: "1em",
            borderRadius: "1rem",
          }}
        >
          <img
            src={note_tape_long}
            alt=""
            style={{
              position: "absolute",
              height: "2em",
              top: "-1rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <h2 style={{ textAlign: "center" }}>about</h2>
          <p style={{ maxWidth: "30vw", fontSize: "1.3rem", fontFamily: 'ShortStack' }}>
            WaffleHacks is a 48-hour student-organized hackathon working to
            bring technical solutions to your local communities and small
            businesses.
            <br />
            <br />
            We welcome all students, of high school level and beyond, and of all
            technical proficiency levels, to join us on June 24th - 26th, 2022.
          </p>
        </div>
        <img src={about_graphic} alt="" style={{ height: "20em" }} />
      </div>

       {/* tracks */}
       <center>
         <div style={{backgroundColor: '#DCA480', borderRadius: '2rem', height: '30em', width: '80%'}}>
            <div>
              <img src={pointer_sign} alt="pointer" />
              <span>Tracks</span>
            </div>
         </div>
       </center>
    </main>
  );
};

export default IndexPage;
