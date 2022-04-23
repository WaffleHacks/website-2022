import * as React from "react";
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <span>&copy; WAFFLEHACKS 2022</span>
    <div className="footer-links">
      <a className="footer-link" href="/privacy-policy">Privacy Policy</a>
      <a className="footer-link" href="/rules">Rules</a>
      <a className="footer-link" href="/code-of-conduct">Code of Conduct</a>
    </div>
  </div>
);

export default Footer;
