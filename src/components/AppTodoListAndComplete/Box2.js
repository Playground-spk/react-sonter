import React, { Component } from "react";

export default class Box2 extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.complete.map(item => {
            return (
              <li>
                <input
                  type="checkbox"
                  value={item.task}
                  onChange={this.props.changePrepareToTodoList}
                />
                {item.task}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
