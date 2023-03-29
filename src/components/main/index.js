import React from "react";
import Tab from "../../objects/tab-jogo-da-velha";
import './styles.css'
import Grid from "../../objects/grid-tab";
import Player from "../../objects/player";

const Main = () => {

    return (<div className="Container-tab">
                <Tab > 
                    <Player player = "o"/> 
                    <Player player = "x"/>
                    <Player player = "o"/>

                    <Player player = "o"/>
                    <Player player = "x"/>
                    <Player player = "o"/>

                    <Player player = "x"/>
                    <Player player = "o"/>
                    <Player player = "x"/>
                </Tab> 
                <Grid /> 
            </div>)
}

export default Main