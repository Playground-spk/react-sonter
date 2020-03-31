import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";

export default class Item extends Component {
  render() {
    return (
      <div>
        <br />
        <li>
          <Row>
            <Col span={17}>
              {this.props.id}|| {this.props.list}
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => this.props.deleteItem(this.props.idx)}
              >
                Done
              </Button>
            </Col>
          </Row>
        </li>
      </div>
    );
  }
}
