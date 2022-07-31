import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"


function App() {


  


  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/">
          Home
        </Route>
      </Routes>
    </div>
  );
}

export default App;
