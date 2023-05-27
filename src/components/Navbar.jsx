import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = function(props) {

    const user = useSelector((state) => state.user);

    return (
        <div className="navbar bg-dark" data-bs-theme="dark" >
            <h3 className="text-light">Hello, {user} - Create Todo List</h3>
            <NavLink to="/home" >
                <button className="btn btn-light">My Todos</button>
            </NavLink>
            <NavLink to="/form" >
                <button className="btn btn-light">New Todo</button>
            </NavLink>
        </div>
    )
};

export default Navbar;