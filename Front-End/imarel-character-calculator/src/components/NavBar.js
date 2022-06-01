import { Link } from "react-router-dom";
import React from "react";

const NavBar = (props) => {

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/matchup">Matchups</Link>
            </li>
        </ul>
    );

}

export default NavBar;