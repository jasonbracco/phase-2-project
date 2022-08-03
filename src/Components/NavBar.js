import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "15px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  textAlign: "center"
};

function NavBar() {
  return ( 
    <div>
        <h1>Get to know the New York Yankees</h1>
        <h3>One stop shop to learn more about your favorite baseball team!</h3>
        <NavLink
            to="/"
            style={linkStyles}
            background= "darkblue"
        >
            Home
        </NavLink>
        <NavLink
            to="/currentroster"
            style={linkStyles}
            background= "darkblue"
        >
            Current Roster
        </NavLink>
        <NavLink
            to="/playerstatistics"
            style={linkStyles}
            background= "darkblue"
        >
            Player Statistics
        </NavLink>
        <NavLink
            to="/buildaplayer"
            style={linkStyles}
            background= "darkblue"  
        >
            Build a player!
        </NavLink>
    </div>
  );
}

export default NavBar;