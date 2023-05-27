import { ADD_TODO, COMPLETED_TODO, DELETE_TODO, SET_USER } from "./types";

// Usuario
export const setUser = (name) => {
    return {
        type: SET_USER,
        payload: name
    }
};

// todos = [ {-}, {-}, {-}, ...]
// todo = { id:000, text: "Esta es la tarea", completed: false }
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
};

export const completedTodo = (id) => {
    return {
        type: COMPLETED_TODO,
        payload: id
    }
};

