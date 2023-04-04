import React from "react";
import './styles.css'

const Label = ({content, children, htmlFor}) => {
    return <label htmlFor={htmlFor} className="label">  {children} {content} </label>
}

export default Label;