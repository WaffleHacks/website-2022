import * as React from "react";
import note_tape_long from "../images/note_tape_long.svg";
import about_graphic from "../images/about_graphic.png";


let aboutStyles = {
    padding: "4em 0em",
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
}

let cardStyles = {
    display: "inline-block",
    position: "relative",
    backgroundColor: "#FDF4EF",
    padding: "1em",
    borderRadius: "1rem"
}

let imgStyles = {
    position: "absolute",
    height: "2em",
    top: "-1rem",
    left: "50%",
    transform: "translateX(-50%)"
}

const About = () => {
  return (
    <div id="about" style={aboutStyles}>

        <div style={ cardStyles }>
          <img
            src={note_tape_long}
            alt=""
            style={imgStyles}
          />
          <h2 style={{ textAlign: "center" }}>about</h2>
          <p className='poppins' style={{ maxWidth: "30vw", fontSize: "1rem" }}>
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
  )
}

export default About