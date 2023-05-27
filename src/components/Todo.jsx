import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../redux/actions";
import { Link } from "react-router-dom";

const Todo = function({id, text, completed}) {

    const dispatch = useDispatch();
    const handleCompleted = (event) => {
        dispatch(completedTodo(id));
    }
    const handleDelete = (event) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div>
            <Link to={`/detail/${id}`}>
                <h2
                    style={completed ? {color: "lightgreen"} : {color: "lightpink"} }
                >Todo: {text}</h2>
            </Link>
            {
                !completed ? <button onClick={handleCompleted}>Completed</button> : null
            }
            {/* Ocultar botón "Delete" si no está completa */}
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    )
};

export default Todo;