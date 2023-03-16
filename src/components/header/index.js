import React from "react";
import "./styles.css"
import Sobre from "./objects/sobre";
import Union from "./objects/union";
import Logo from "./objects/logo"

const Header = () => {
    return (<div className="header">
        <><Logo /><Sobre /><Union /></>
    </div>)
}

export default Header