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
                exact
                style={linkStyles}

                activeStyle={{
                    background: "red",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/quiz"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "red",
                }}
            >
                Quiz
            </NavLink>
            <NavLink
                to="/form"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "red",
                }}
            >
                Form
            </NavLink>
        </div>
    );
}

export default NavBar;
