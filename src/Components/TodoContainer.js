import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }
  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  addTodoItem = title => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
      <TodosList
        todos={this.state.todos}
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}
      />
      </div>
    );
  }
}

export default TodoContainer;
