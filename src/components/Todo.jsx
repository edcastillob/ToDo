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



            
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todo</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id}</th>
      <td> 
        <Link to={`/detail/${id}`}>            
        <p style={completed ? {color: "lightgreen"} : {color: "lightpink"} }>{text}</p>
        </Link>
        </td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>

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