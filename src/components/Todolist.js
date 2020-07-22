import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            margin: '20px 20px',
            textDecoration: this.props.todolist.completed ? 'line-through' : 'none'
        }
    }

    buttonStyle = () => {
        return {
            backgroundColor: 'red',
            float: 'right',
            color: '#fff'
        }
    }

    displayText() {
        console.log(this.props)
    }

    valueUpdate(event) {
        console.log('event', event);
    }

    render(){
        console.log(this.props);
        const { title, id } = this.props.todolist;
        return(
            <div style={this.getStyle()}>
                <input onChange={this.displayText.bind(this)} onChange={this.props.valueUpdate.bind(this, id)} type="checkbox"></input>
                <button type="button" onClick={this.props.deleteTodoItem.bind(this, id)} style={this.buttonStyle()}>Delete</button>
                <span>{title}</span>
            </div>
        )
    }
}

TodoList.propTypes = {
    todolist: PropTypes.object.isRequired,
    deleteTodoItem: PropTypes.func.isRequired,
    valueUpdate: PropTypes.func.isRequired
}

export default TodoList;