import React from "react";
import "./style.css";

const Card = props => {
    return(
        <div className="card">
            <img src={props.image} className="card-image" />
        </div>
    );
}

export default Card;