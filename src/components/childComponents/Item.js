import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";

export default class Item extends Component {
  deleteItem = itemAIm => {
    this.props.TodoList.filter((item, index) => {
      return index != itemAIm;
    });
  };
  render() {
    return (
      <div>
        <li>
          {this.props.item}
          <Button
            type="primary"
            onClick={() => this.deleteItem(this.props.idx)}
          >
            Done
          </Button>
        </li>
      </div>
    );
  }
}
