import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = function(props) {

    // console.log(useParams().id);
    const { id } = useParams();
    const { todos } = useSelector((state) => state);
    const todo = todos.filter((todo) => todo.id === id)[0]; // {...}
    // console.log(todo);

    return (
        <div style={{height: "450px", backgroundColor: "lightyellow"}} >
            <h1>Detail</h1>
            <h2>Todo: {todo.text}</h2>
            <h2>Completed: { todo.completed ? "Yes" : "No" }</h2>
            <h2>Created At: { todo.id }</h2>
        </div>
    )
};

export default Detail;