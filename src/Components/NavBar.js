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
            to="/stats"
            style={linkStyles}
            background= "darkblue"
        >
            Player Statistics
        </NavLink>
        <NavLink
            to="/login"
            style={linkStyles}
            background= "darkblue"  
        >
            Build a player!
        </NavLink>

        <h3>How it works:</h3>
        <h4>Check out the current roster and compare stats from your favorite players!  </h4>
        <h4>You can even build new teammates!</h4>
    </div>
  );
}

export default NavBar;