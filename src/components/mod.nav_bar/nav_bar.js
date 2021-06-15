import React from 'react';
import {Route, Link} from 'react-router-dom';

import './nav_bar.css';

function Nav_Bar(props) {
    return (
            <nav>
                <ul className="nav-list">
                    <li> <Link to={"/"}>Home</Link> </li>
                    <li> <a target="_blank" href={"https://www.youngliving.com/apps/enrollment/step/1"}>Buy</a> </li>
                    <li> <Link to={"/posts"}>Posts</Link> </li>
                    {/* <li> <Link to={"/sales"}>Sales</Link> </li>
                    <li> <Link to={"/recipes"}>Recipes</Link> </li>
                    <li> <Link to={"/about"}>About</Link> </li> */}
                </ul>
            </nav>
    );
}

export default Nav_Bar;