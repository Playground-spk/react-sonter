import React, { Component } from "react";

export default class Box1 extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.map(todo => {
            return (
              <li>
                <input
                  type="checkbox"
                  value={todo.task}
                  checked={todo.checked}
                  onChange={this.props.changePrepareToComplete}
                />
                {todo.task}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
