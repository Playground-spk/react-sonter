import React, { Component } from "react";
import Item from "./Item.js";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.TodoList.map((item, idx) => {
            return (
              <Item
                key={item}
                item={item}
                idx={idx}
                TodoList={this.props.TodoList}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
