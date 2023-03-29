import React from "react";
import Tab from "../../objects/tab-jogo-da-velha";
import './styles.css'
import Player from "../../objects/player";

const Grid = () => {

    return (
            <Tab > 
                <ul className="grid">
                    <li className='list'><Player player = "o"/></li>
                    <li className='list'><Player player = "x"/></li>
                    <li className='list'><Player player = "o"/></li>

                    <li className='list'><Player player = "o"/></li>
                    <li className='list'><Player player = "x"/></li>
                    <li className='list'><Player player = "o"/></li>

                    <li className='list'><Player player = "x"/></li>
                    <li className='list'><Player player = "o"/></li>
                    <li className='list'><Player player = "x"/></li>
                </ul>
            </Tab> 
         )
}

export default Grid