import React from "react";
import "./style.css";

const Header = props => {
    return (

        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">Memory Game</div>
                    <div className="col-lg-4">{props.message}</div>
                    <div className="col-lg-4">Score: {props.score} | Top Score: {props.topScore}</div>
                </div>
            </div>
        </div>
    );
}

export default Header