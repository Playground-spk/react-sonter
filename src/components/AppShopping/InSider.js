import React, { Component } from "react";
import { Button, Row, Col } from "antd";

export default class InSider extends Component {
  render() {
    return (
      <Col>
        <Row>
          <Col>
            <Button
              className="buttonInSider"
              onClick={() => this.props.changeClassify(0)}
            >
              Food
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="buttonInSider"
              onClick={() => this.props.changeClassify(1)}
            >
              Fruit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="buttonInSider"
              onClick={() => this.props.changeClassify(2)}
            >
              goods
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}
