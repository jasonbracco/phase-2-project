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
        <h1>Shoe Collector</h1>
        <h3>Build a collection of your favorite kicks!</h3>
        <NavLink
            to="/"
            style={linkStyles}
            background= "darkblue"
        >
            Home
        </NavLink>
        <NavLink
            to="/favoriteshoes"
            style={linkStyles}
            background= "darkblue"
        >
            Favorite Shoes
        </NavLink>
        <NavLink
            to="/shoeinfo"
            style={linkStyles}
            background= "darkblue"
        >
            Shoe Info
        </NavLink>
        <NavLink
            to="/addshoes"
            style={linkStyles}
            background= "darkblue"  
        >
            Add a shoe!
        </NavLink>
    </div>
  );
}

export default NavBar;