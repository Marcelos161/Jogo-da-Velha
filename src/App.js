import React from "react";
import Header from "./components/header";
import Grid from "./components/grid";
import Checkbox from "./objects/Checkbox";
import './App.css'


function App() {
  return (
    <main className="app">
      <Header />
      <Grid />
      <Checkbox id="show" content="Mostrar eventos" value="show"/>
    </main>
  );
}

export default App;

