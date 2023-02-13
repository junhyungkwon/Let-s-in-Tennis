import react, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Data from "./Data.js";

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
