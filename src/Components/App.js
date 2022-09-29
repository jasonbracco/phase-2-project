import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import FavoriteShoes from "./FavoriteShoes"
import ShoeInfo from "./ShoeInfo"
import ShoeForm from "./ShoeForm"


function App() {

  const [players, setPlayers] = useState([])


  useEffect(() => {
      fetch("http://localhost:9292")
      .then(response => response.json())
      .then(() => setPlayers())
  },[])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage />
          }
        />
        <Route
          path="/favoriteshoes"
          element={
            <FavoriteShoes/>
          }
        />
        <Route
          path="/shoeinfo"
          element={
            <ShoeInfo/>
          }
        />
      <Route
          path="/addshoes"
          element={
            <ShoeForm/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
