import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Radio } from "antd";
import "./css/TrafficLight.css";
import { Row, Col } from "antd";

export default class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button className="Button55555" shape="round">
              55555
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
