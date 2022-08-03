import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import CurrentRoster from "./CurrentRoster"
import PlayerStatistics from "./PlayerStatistics"
import PlayerForm from "./PlayerForm"


function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/yankees")
      .then(response => response.json())
      .then((player) => setPlayers(player))
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
          path="/currentroster"
          element={
            <CurrentRoster players={players}/>
          }
        />
        <Route
          path="/playerstatistics"
          element={
            <PlayerStatistics players={players}/>
          }
        />
      <Route
          path="/buildaplayer"
          element={
            <PlayerForm players={players}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
