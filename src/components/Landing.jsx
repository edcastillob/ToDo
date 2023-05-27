import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Landing = function(props) {

    const [ input, setInput ] = React.useState("");
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate(); // => function(path) => navigate("/form")
    // console.log(navigate);
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(setUser(input));
        navigate("/form");
    };

    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
            <h1>Todo App</h1>
            <label className="form-label"> your name: </label>
            <input
                className="form-control"
                type="text"
                name="input"
                value={input}
                placeholder="Enter name..."
                onChange={handleChange}
                />
            <button className="btn btn-light mt-2" onClick={handleClick}>Set name</button>
            </div>
        </div>
    )
};

export default Landing;

// 1- Guardar event.target.value => en estado local
// 2- handleClick => dispatch => { type: SET_USER, payload: input }
// 3- Redirija a "Form.jsx"
// nombre => state.user