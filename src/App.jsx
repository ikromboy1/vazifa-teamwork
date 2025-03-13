import "./App.css";
import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <>
    <Router>
      <Route path="/" element={<Home/>}/>
    </Router>
    </>
  );
}

export default App;
