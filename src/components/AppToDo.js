import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "../css/AppToDo.css";
import TodoList from "./childComponents/TodoList.js";
export default class AppToDo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      text: ""
    };
  }
  changeText = e => {
    let text = e.target.value;

    this.setState({ text: text });
  };
  addNewList = e => {
    e.preventDefault();
    let text = this.state.text;
    let todoList = this.state.todoList;
    this.setState({ todoList: [...todoList, text], text: "" });
  };
  deleteItem = itemAIm => {
    let todoList = this.state.todoList;

    todoList = todoList.filter((item, index) => {
      return index != itemAIm;
    });
    this.setState({ todoList: todoList });
  };

  render() {
    const text = this.state.text;
    const todoList = this.state.todoList;
    return (
      <div>
        <Row>
          <Col span={16}>
            <input onChange={this.changeText} value={text} style={{}} />
            <Button type="primary" onClick={this.addNewList}>
              Add
            </Button>
          </Col>
          <Col span={8}> </Col>
        </Row>
        <Row>
          <Col>
            <TodoList TodoList={todoList} />
          </Col>
        </Row>
      </div>
    );
  }
}
