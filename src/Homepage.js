import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Radio } from "antd";
import "antd/dist/antd.css";
import "./css/homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Row style={{ height: "15rem" }} justify="center" align="middle">
          <Col className="Head" span={24}>
            Just Click !!!
          </Col>
        </Row>
        <Row style={{ height: "22rem" }} justify="center" align="middle">
          <Col span={8}>
            <Button type="primary" shape="round" className="Button55555">
              <Link to={"/trafficlight"} className="LinkTo">
                traffic Light
              </Link>
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary" shape="round" className="Button55555">
              <Link to={"/carousel"} className="LinkTo">
                Carousel
              </Link>
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary" shape="round" className="Button55555">
              <Link to={"/counter"} className="LinkTo">
                Counter
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
