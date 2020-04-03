import React, { Component } from "react";
import { Row, Col } from "antd";
import "./css/AppTodoListAndComplete.css";

export default class AppTodoListAndComplete extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row justify="center">
          <Col span={6} className="theBox"></Col>
          <Col span={2}></Col>
          <Col span={6}></Col>
        </Row>
      </div>
    );
  }
}
