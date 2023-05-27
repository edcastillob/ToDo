import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = function(props) {

    const user = useSelector((state) => state.user);

    return (
        <div style={{height: "200px", backgroundColor: "lightpink"}} >
            <h1>User: {user} - Todo List</h1>
            <NavLink to="/home" >
                <button>My Todos</button>
            </NavLink>
            <NavLink to="/form" >
                <button>New Todo</button>
            </NavLink>
        </div>
    )
};

export default Navbar;