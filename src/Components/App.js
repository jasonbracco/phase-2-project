import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import CurrentRoster from "./CurrentRoster"
import PlayerStatistics from "./PlayerStatistics"


function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/yankees")
      .then(response => response.json())
      .then((player) => setPlayers(player))
  },[])

  const playersDisplayed = players.filter((object => {
      return object
  }))

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
          path="/currentroster"
          element={
            <CurrentRoster playersDisplayed={playersDisplayed}/>
          }
        />
                <Route
          path="/playerstatistics"
          element={
            <PlayerStatistics playersDisplayed={playersDisplayed}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
