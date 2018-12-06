import React, { Component } from "react";
import TodoInput from "./TodoInput.js";
import Todos from "./Todos";
import { connect } from "react-redux";

class TodoList extends Component {
  //state = {todos: []}

  render() {
    return (
      <div>
        <TodoInput />
        <Todos/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
