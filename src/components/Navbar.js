import * as React from "react";
import "./navbar.css";

const NavItem = ({ href, name, external = false, ...props }) => {
  if (external) return <a href={href} className="nav-item" {...props} target="_blank" rel="noreferrer">{name}</a>;
  else return <a href={href} className="nav-item" {...props}>{name}</a>;
}

const Navbar = ({ items = [] }) => (
  <nav className="nav">
    <div id='nav-lg' style={{display: 'flex', justifyContent: "center"}}>
      {items.map((item) => <NavItem key={item.name} {...item}/>)}
    </div>
  </nav>
);

export default Navbar;
