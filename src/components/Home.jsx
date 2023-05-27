import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Home = function(props) {

    const { todos } = useSelector((state) => state);
    console.log(todos);

    return (
        <div style={{height: "450px"}} >
            <h1>Todo List...</h1>
            {
                todos.map((todo) => (
                    <Todo
                        text={todo.text}
                        completed={todo.completed}
                        id={todo.id}
                        key={todo.id}
                    />
                ))
            }
        </div>
    )
};

export default Home;