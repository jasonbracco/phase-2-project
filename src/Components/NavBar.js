import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "75px",
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
        <h1>Multi Sport Fantasy Draft App</h1>
        <h3>Build a super team for your favorite sport with your favorite players!</h3>

        <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Available Players
        </NavLink>
        <NavLink
            to="/login"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Player Statistics
        </NavLink>
        <NavLink
            to="/login"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Football
        </NavLink>

        <h3>How it works:</h3>
        <h4>Select a sport from the above options.  Each tab will contain the specific league's teams.</h4>
        <h4>Select players </h4>
    </div>
  );
}

export default NavBar;