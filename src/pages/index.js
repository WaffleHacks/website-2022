import * as React from "react";
import '../index.css'
import landing_page from "../images/landing_page.png";
import note_tape_long from "../images/note_tape_long.svg";
import about_graphic from "../images/about_graphic.png";
import pointer_sign from "../images/pointer_sign.svg";
import grid from "../images/grid.svg";
import waffles_img from '../images/waffles.svg';
import sustainability_img from '../images/sustainability.svg';
import finance_img from '../images/finance.svg';
import entertainment_img from '../images/entertainment.png';
import faq_backg from '../images/faqbackg.svg';

import StickyNote from "../components/StickyNote";
import FaqPointer from "../components/FaqPointer";


console.log('GRID:', grid);

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
         <div id='tracks-box' style={{paddingTop: '8rem', paddingBottom: '3rem'}}>
            <div style={{position: 'absolute', top: '2rem', left: '-2rem'}}>
              <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
              <span style={{color: 'white', position: 'absolute', top: '45%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem'}}>TRACKS</span>
            </div>
            <StickyNote img={waffles_img} name="Community" />
            <StickyNote img={finance_img} name="Finance" />
            <StickyNote img={entertainment_img} name="Entertainment" />
            <StickyNote img={sustainability_img} name="Sustainability" />
         </div>
       </center>

       {/* faq */}
       <div id='faq' style={{backgroundImage: 'url(' + faq_backg + ')'}}>
            <FaqPointer question='What is a hackathon?' />
            <FaqPointer question='When is the registration deadline?' />
            <FaqPointer question='Who can attend?' />
            <FaqPointer question='Do I have to submit a project to join?' />
            <FaqPointer question='How will teams works?' />
            <FaqPointer question='What are hackathon tracks?' />
            <FaqPointer question='I have more questions!' />
            <FaqPointer question='Any guidance for beginners?' />
       </div>
    </main>
  );
};

export default IndexPage;
