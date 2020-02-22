import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";


const App = () => {
    return (
        // <Router>
        //     <Route exact path="/" component={Game} />
        // </Router>
        <Game />
    );
};

export default App;