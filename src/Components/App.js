import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import CurrentRoster from "./CurrentRoster"


function App() {

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
            <CurrentRoster />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
