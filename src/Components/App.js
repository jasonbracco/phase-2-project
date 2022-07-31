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
        <Route exact path="/Basketball">
          Basketball
        </Route>
        <Route exact path="/Baseball">
          Baseball
        </Route>
        <Route exact path="/Football">
          Football
        </Route>
      </Routes>
    </div>
  );
}

export default App;
