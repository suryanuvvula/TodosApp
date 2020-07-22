import React, { Component } from 'react';
import TodoList from './Todolist';
import PropTypes from 'prop-types';

class Todos extends Component {

    onValueUpdate(event) {
        console.log('event in todos', event);
    }
    render() {
        return this.props.todo.map((todo) => (
            <TodoList key={todo.id} todolist={todo} deleteTodoItem={this.props.deleteTodoItem} valueUpdate={this.props.onValueUpdate}/>
        ))
        
    }
}

Todos.propTypes = {
    todo: PropTypes.array.isRequired,
    deleteTodoItem: PropTypes.func.isRequired,
    onValueUpdate: PropTypes.func.isRequired
}

export default Todos;