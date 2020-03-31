import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "../css/AppToDo.css";
import TodoList from "./childComponents/TodoList.js";
import _ from "lodash";
export default class AppToDo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      text: "",
      editText: "",
      editId: ""
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
    let list = {
      id: _.uniqueId(),
      task: text
    };
    this.setState({ todoList: [...todoList, list], text: "" });
  };
  deleteItem = itemAIm => {
    let todoList = this.state.todoList;

    todoList = todoList.filter((item, index) => {
      return index != itemAIm;
    });
    this.setState({ todoList: todoList });
  };
  editText = e => {
    let newText = e.target.value;
    this.setState({ editText: newText });
  };
  editId = e => {
    let newId = e.target.value;
    this.setState({ editId: newId });
  };
  editTodoList = () => {
    let newTodoList = this.state.todoList.map(item => {
      if (item.id == this.state.editId) {
        return { id: this.state.editId, task: this.state.editText };
      } else {
        return item;
      }
    });
    this.setState({ todoList: newTodoList });
  };

  render() {
    const text = this.state.text;
    const todoList = this.state.todoList;
    return (
      <div>
        <Row>
          <Col span={16}>
            <input
              onChange={this.changeText}
              value={text}
              style={{ height: "100%" }}
            />
            <Button type="primary" onClick={this.addNewList}>
              Add
            </Button>
          </Col>
          <Col span={8}> </Col>
        </Row>
        <Row>
          <Col span={10}>
            <input
              type="text"
              placeholder="Edit List"
              onChange={this.editText}
            />
            <input
              type="text"
              placeholder="target by Id"
              onChange={this.editId}
            />
            <Button type="primary" onClick={this.editTodoList}>
              Edit
            </Button>
          </Col>

          <Col span={10}></Col>

          <Col span={4}></Col>
        </Row>
        <Row>
          <Col>
            <TodoList TodoList={todoList} deleteItem={this.deleteItem} />
          </Col>
        </Row>
      </div>
    );
  }
}
