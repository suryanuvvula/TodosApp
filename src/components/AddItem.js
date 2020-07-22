import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {
    state = {
        title: ''
    }

    render() {
        return(
            <div>
                <input style={{width: '91%',
                display: 'inline-block',
                marginLeft: '20px', padding: '10px'}} type="text" placeholder="Add todo items"
                value={this.state.title}
                onChange={this.onChange}></input>
                <button type="submit" style={{padding: '10px', marginLeft: '5px'}} type="button" onClick={this.submit}>Submit</button>
            </div>
        )
    }

    onChange = (e) => {
        this.setState({ title: e.target.value});
    }

    submit = () => {
        this.props.addTodoItem(this.state.title);
        this.setState({title: ''});
    }
}

AddItem.propTypes = {
    addTodoItem: PropTypes.func.isRequired
}

export default AddItem;