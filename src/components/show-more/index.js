import React from "react";
import Input from "../../objects/Input";
import Label from "../../objects/label";
import './styles.css'

const ShowMore = () => {
    return  <div className="showmore">
                <Label htmlFor="show" content="Mostrar eventos">
                    <Input id="show" value="show"/> 
                </Label>
            </div>
}   

export default ShowMore