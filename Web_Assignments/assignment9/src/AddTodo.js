import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <span onClick={this.onSubmit} className="add-btn">
          +
        </span>
        <input
          className="add-todo"
          type="text"
          name="title"
          placeholder="Add item"
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
          autoComplete="off"
        />
      </form>
    );
  }
}

export default AddTodo;
