import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "./css/AppTodoListAndComplete.css";
import Box1 from "./components/AppTodoListAndComplete/Box1";
import Box2 from "./components/AppTodoListAndComplete/Box2";

export default class AppTodoListAndComplete extends Component {
  state = { task: "", todoList: [], complete: [] };
  onChangeInput = e => {
    this.setState({ task: e.target.value });
  };
  addTodoList = () => {
    let newTodoList = [...this.state.todoList];
    this.setState({
      todoList: [...newTodoList, { checked: false, task: this.state.task }],
      task: ""
    });
  };
  changePrepareToComplete = e => {
    let newTodoList = [...this.state.todoList];
    let targetList = newTodoList.findIndex(todo => {
      return todo.task === e.target.value;
    });
    newTodoList[targetList] = { checked: true, task: e.target.value };
    this.setState({ todoList: newTodoList });
  };
  clickToMoveToComplete = () => {
    let moving = this.state.todoList.filter(item => {
      return item.checked === true;
    });
    let stand = this.state.todoList.filter(item => {
      return item.checked === false;
    });
    this.setState({
      complete: [...this.state.complete, ...moving],
      todoList: stand
    });
  };
  changePrepareToTodoList = e => {
    let newComplete = this.state.complete;
    let targetList = newComplete.findIndex(item => {
      return item.task === e.target.value;
    });
    newComplete[targetList] = { checked: false, task: e.target.value };
    this.setState({ complete: newComplete });
  };
  clickToMoveToTodoList = () => {
    let moving = this.state.complete.filter(item => item.checked === false);
    let stand = this.state.complete.filter(item => item.checked === true);
    this.setState({
      todoList: [...this.state.todoList, ...moving],
      complete: stand
    });
  };

  render() {
    return (
      <div>
        <Row justify="center" align="middle" className="set-up">
          <Col span={6} className="theBox">
            <Row className="head" justify="center" align="middle">
              Todo List
            </Row>
            <Row>
              <Box1
                todoList={this.state.todoList}
                changePrepareToComplete={this.changePrepareToComplete}
              />
            </Row>
          </Col>
          <Col span={2}>
            <Row justify="center">
              <br />
              <br />
              <Button onClick={this.clickToMoveToComplete}> done</Button>
            </Row>
            <Row justify="center">
              <br />
              <br />
              <Button onClick={this.clickToMoveToTodoList}> Re do</Button>
            </Row>
          </Col>
          <Col span={6} className="theBox">
            <Row className="head" justify="center" align="middle">
              {" "}
              Completed
            </Row>
            <Row>
              <Box2
                complete={this.state.complete}
                changePrepareToTodoList={this.changePrepareToTodoList}
              />
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={14}>
            <br />
            <Row justify="center">
              <input
                type="text"
                onChange={this.onChangeInput}
                value={this.state.task}
              />
              <Button onClick={this.addTodoList}>Add</Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
