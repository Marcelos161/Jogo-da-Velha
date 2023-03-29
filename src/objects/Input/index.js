import React from "react";
import './styles.css'
const Input = ({id, value}) => {
    return <input id={id} type="checkbox" value={value} className="show"></input>
}

export default Input