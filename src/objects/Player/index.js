import React from "react";
import JogadorX from "../../img/JogadorX.png"
import JogadorO from "../../img/JogadorO.png"
import './styles.css'

const Player = ({player}) => {
    const players = [];
    players['x'] = JogadorX;
    players['o'] = JogadorO;

    return <button className="player"> 
                <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`}/> 
           </button>
};

export default Player;
