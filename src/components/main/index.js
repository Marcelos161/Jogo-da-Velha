import React from "react";
import Tab from "../../objects/tab-jogo-da-velha";
import X from "../../objects/GameX"
import Circle from "../../objects/GameCircle";
import './styles.css'
import Grid from "../../objects/grid-tab";

const Main = () => {
    return (<div className="Container-tab"><Tab /> <X /> <Circle /> <Grid /></div>)
}

export default Main