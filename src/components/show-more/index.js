import React from "react";
import ShowButton from "../../objects/show-button";
import Label from "../../objects/label";
import './styles.css'

const ShowMore = () => {
    return  <div className="showmore">
                <Label > <ShowButton /> </Label>
            </div>
}   

export default ShowMore