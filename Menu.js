import React from 'react'
import Video from './Video';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
function Menu() {
    return (
        <div className="Menu">
        <ul>
            <li>
                <Link to="/fast">Fast</Link>
            </li>
            <li>
                <Link to="/slow">Slow</Link>
            </li>
            <li>
                <Link to="/cute">Cute</Link>
            </li>
            <li>
                <Link to="/eek">Eek</Link>
            </li>
        </ul> 
        <Switch>
        <Route path="/:name" component={Video}/>
       </Switch> 
        </div>)
}

export default Menu;