import React from "react";
import "./style.css";

const Card = props => {
    return(
        <div className="card">
            <img 
                data-clicked={props.clicked}
                src={props.image} 
                alt={props.name}
                className="card-image"
                onClick={props.onClick}
            />
        </div>
    );
}

export default Card;