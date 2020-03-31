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
                id={item.id}
                list={item.task}
                idx={idx}
                TodoList={this.props.TodoList}
                deleteItem={this.props.deleteItem}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
