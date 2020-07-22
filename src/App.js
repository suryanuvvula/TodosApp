import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddItem from './components/AddItem';
import About from './components/layout/About';

class App extends Component {
  state = {
    todo: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
      this.setState({todo: res.data});
    })
  }

  onValueUpdate = (id) => {
    this.setState({ todo: this.state.todo.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
    console.log('event in app js', id);
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      this.setState({ todo: [...this.state.todo.filter(todo => todo.id !== id)]
      });
    })
  }

  addTodoItemList = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => {
      this.setState({ todo: [...this.state.todo, res.data]})
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
              <AddItem addTodoItem={this.addTodoItemList}/>
              <header className="App-header">
                <Todos onValueUpdate={this.onValueUpdate} deleteTodoItem={this.deleteTodo} todo={this.state.todo}/>
              </header>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;
