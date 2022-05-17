import * as React from "react";

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
const devpostStyle = {
    padding: "0.5em 1em",
    fontSize: "1.5em",
    color: "rgb(180, 200, 255)",
    textDecoration: "none",
}

const Navbar = () => {
  return (
    <nav style={navStyles}>
        <div id='nav-lg' style={{display: 'flex', justifyContent: "center"}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <a href="#tracks" style={navLinkStyles}>
            tracks
          </a>
          <a href="#faq" style={navLinkStyles}>
            faqs
          </a>
          <a href="#sponsors" style={navLinkStyles}>
            sponsors
          </a>
          <a href="#apply" style={navLinkStyles}>
            apply
          </a>
        </div>
      </nav>
  )
}

export default Navbar
