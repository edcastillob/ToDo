import React from "react";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";

class Form extends React.Component {
    constructor(props) {
        // props = { addTodo: function(todo) }
        super(props);
        this.state = {
            text: "",
            completed: false
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            text: event.target.value
        })
    };

    handleClick = (event) => {
        event.preventDefault();
        this.props.addTodo({
            ...this.state,
            id: Date()
        });
        this.setState({
            text: "",
            completed: false
        })
    };

    render() {
        return(
            <div style={{height: "450px", backgroundColor: "lightcyan"}}>
                <h1>Form</h1>
                <form>
                    <label>New Todo: </label>
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        placeholder="New todo..."
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Create</button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {dispatch(addTodo(todo))}
    }
}

export default connect(null, mapDispatchToProps)(Form);

// Despachar: { type: ADD_TODO, payload: {id, text, completed} }