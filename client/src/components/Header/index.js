import React from "react";
import "./style.css";

const Header = props => {
    <div className="Header">
        <div className="container">
            <div className="row">
                <div className="col-md-4">Memory Game</div>
                <div className="col-md-4">Click an image to begin!</div>
                <div className="col-md-4">Score: {props.score} | Top Score: {props.topScore}</div>
            </div>
        </div>
    </div>
}

export default Header