import React, { Component } from 'react'
import {connect} from "react-redux"

class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo, i) => <li key={i}>{todo.content}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);
