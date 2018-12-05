import React, { Component } from "react";
import { connect } from "react-redux";

class TodoInput extends Component {
  onAdded = () => {
    const { input } = this.refs;
    this.props.addNewTodo(input.value);
    input.value = "";
  };

  render() {
    return (
      <div>
        <input ref="input" />
        <button onClick={this.onAdded}>add</button>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addNewTodo: newTodo => {
    const newToDoItem = {
      content: newTodo,
      status: "active"
    };
    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      mode: "cors",
      body: JSON.stringify(newToDoItem)
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "NEWTODOS",
          payload: {
            id: res.id,
            content: res.content,
            status: res.status
          }
        });
      });
  }
});
export default connect(
  null,
  mapDispathToProps
)(TodoInput);
