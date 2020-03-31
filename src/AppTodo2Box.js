import React, { Component } from "react";
import "antd/dist/antd.css";
import _ from "lodash";

import { Transfer, Row, Col, Button } from "antd";

export default class App extends Component {
  state = {
    mockData: [],
    targetKeys: [],
    inputValue: ""
  };

  // componentDidMount() {
  // this.getMock();
  //}

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  };

  renderItem = item => {
    const customLabel = (
      <span className="custom-item">
        {item.title}|| {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title // for title and filter matching
    };
  };
  changeInputValue = e => {
    let input = e.target.value;
    this.setState({ inputValue: input });
  };
  addTodoList = () => {
    let reUse = _.uniqueId();
    let list = {
      key: reUse,
      title: reUse,
      description: this.state.inputValue
    };
    this.setState({
      mockData: [...this.state.mockData, list],
      inputValue: ""
    });
  };

  render() {
    return (
      <Col>
        <Row justify="center">
          <Col>
            <h1>TodoList</h1>
          </Col>
          <Col>
            <h1>Complete</h1>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Transfer
              dataSource={this.state.mockData}
              listStyle={{
                width: 300,
                height: 300
              }}
              targetKeys={this.state.targetKeys}
              onChange={this.handleChange}
              render={this.renderItem}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <input
              type="text"
              onChange={this.changeInputValue}
              value={this.state.inputValue}
            />
            <Button type="primary" onClick={this.addTodoList}>
              Add
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}
