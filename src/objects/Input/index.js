import React from "react";
import './styles.css'
const Input = ({id, value}) => {
    return <input className="input" id={id} type="checkbox" value={value}></input>
}

export default Input