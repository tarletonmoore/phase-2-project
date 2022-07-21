import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
};

function NavBar() {


    return (
        <div>
            <NavLink
                to="/"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={linkStyles}
                /* add prop for activeStyle */
                activeStyle={{
                    background: "grey",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/quiz"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Quiz
            </NavLink>
            <NavLink
                to="/form"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Form
            </NavLink>
        </div>
    );
}

export default NavBar;
