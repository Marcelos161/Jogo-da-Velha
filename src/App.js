import React from "react";
import Header from "./components/header";
import Grid from "./components/grid";
import ShowMore from "./components/show-more";
import './App.css'


function App() {
  return (
    <main className="app">
      <Header />
      <Grid />
      <ShowMore />
    </main>
  );
}

export default App;

