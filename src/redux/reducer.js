import { ADD_TODO, COMPLETED_TODO, DELETE_TODO, SET_USER } from "./types";

const initialState = {
    todos: [],
    user: ""
}

// todos = [ {id:1, completed: true }, {id:2}, {id:3}, ...]
// payload       1

// { type: SET_USER, payload: name }

const reducer  = (state = initialState, action) => {
    const { type, payload } = action; // action = { type:..., payload:... }
    switch(type) {
        case SET_USER: {
            return {
                ...state,
                user: payload
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        }
        case DELETE_TODO: {
            const filteredTodos = state.todos.filter(
                (todo) => todo.id !== payload
            );
            return {
                ...state,
                todos: filteredTodos
            }
        }
        case COMPLETED_TODO: {
            const newTodos = state.todos.map(
                todo => todo.id === payload
                    ? {...todo, completed: true}
                    : {...todo}
            );
            return {
                ...state,
                todos: newTodos
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default reducer;