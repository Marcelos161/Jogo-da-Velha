import React from "react";
import Tab from "../../objects/tab-jogo-da-velha";
import './styles.css'
import Grid from "../../objects/grid-tab";
import Player from "../../objects/Player";

const Main = () => {
    return (<div className="Container-tab"><Tab /> <Grid /> <Player /></div>)
}

export default Main