import React from "react";

import Todos from "./ToDo";
import AddTodo from "./AddTodo";

import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    id: 0,
  };

  markComplete = (id, e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //update "title" prop in state when user changes text
  editText = (id, e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = e.target.value;
        }
        return todo;
      }),
    });
  };

  //when user clicks outside the item row, data is saved to db
  saveText = (id, e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = e.target.value;
        }
        return todo;
      }),
    });
  };

  //delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //create new todo
  addTodo = (title) => {
    let newId = this.state.id + 1;
    this.setState({ id: newId });
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.id, title, completed: false },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title">What's the plan for today?</h2>
          <AddTodo addTodo={this.addTodo} />
          <div className="todos-wrapper">
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
              editText={this.editText}
              saveText={this.saveText}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
