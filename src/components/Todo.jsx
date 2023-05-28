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
      <td>
      {
                !completed ? <button onClick={handleCompleted}>Completed</button> : null
      }
                <button onClick={handleDelete}  >Delete Todo</button>
      </td>
      <td></td>
    </tr>
    
  </tbody>
</table>

            
        </div>
    )
};

export default Todo;