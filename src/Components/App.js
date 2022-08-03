import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import CurrentRoster from "./CurrentRoster"
import PlayerStatistics from "./PlayerStatistics"
import PlayerForm from "./PlayerForm"


function App() {

  const [players, setPlayers] = useState([])
  const [bats, setBats]=useState("")
  const [throws, setThrows]=useState("")
  const [position, setPosition]=useState("")
  const [number, setNumber]=useState("")
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")
  const [image, setImage]=useState("")

  useEffect(() => {
      fetch("http://localhost:3000/yankees")
      .then(response => response.json())
      .then((player) => setPlayers(player))
  },[])

  function onAddPlayer(newPlayer){
    return [...players, newPlayer]
  }



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
            <PlayerForm bats={bats} setBats={setBats} throws={throws} setThrows={setThrows} position={position} setPosition={setPosition} number={number} setNumber={setNumber} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} image={image} setImage={setImage} onAddPlayer={onAddPlayer}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
