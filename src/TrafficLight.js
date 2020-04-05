import React, { Component } from "react";
import "antd/dist/antd.css";
import "./css/TrafficLight.css";
import { Row, Col, Button } from "antd";

export default class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      count: <h2>2</h2>,
      ////////////////////////////////////////////////////////////////
      index2: 0,
      count2: <h2>2</h2>,
    };
  }
  changeColor = () => {
    return this.state.index % 3 == 1
      ? this.delayYellowToRed()
      : this.setState((prevState) => ({
          index: prevState.index + 1,
        }));
  };
  delayYellowToRed = () => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % 3,
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        index: (prevState.index + 1) % 3,
      }));
    }, 2000);
    setTimeout(() => {
      this.setState({ count: <h2>1</h2> });
      setTimeout(() => {
        this.setState({ count: <h2>2</h2> });
      }, 1000);
    }, 1000);
  };
  changeColor2 = () => {
    this.state.index2 % 2 === 0
      ? this.changeYellowToRed()
      : this.setState((prevState) => ({ index2: prevState.index2 + 1 }));
  };
  changeYellowToRed = () => {
    this.setState((prevState) => ({ index2: (prevState.index2 + 1) % 3 }));
    setTimeout(() => {
      this.setState((prevState) => ({ index2: (prevState.index2 + 1) % 3 }));
    }, 2000);
  };

  render() {
    const index = this.state.index;
    const colorList = [
      { backgroundColor: "red" },
      { backgroundColor: "green" },
      { backgroundColor: "yellow" },
    ];
    return (
      <Row>
        <Row justify="center" className="App-1-head ">
          Traffic Light
        </Row>
        <Row className="App-1-body">
          <Col span={6}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Button
                className="App-1-btn-ctr"
                onClick={this.changeColor}
                disabled={this.state.index == 2 ? true : false}
              >
                {" "}
                Change Light{" "}
              </Button>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col className="App-1-traffic-light">
                <Row justify="center" align="middle" style={{ height: "100%" }}>
                  <Col span={24}>
                    <div className="App-1-light" style={colorList[index]}></div>
                  </Col>
                  <Col span={24}>
                    <div className="App-1-light" style={colorList[index]}></div>
                  </Col>
                  <Col span={24}>
                    <div className="App-1-light" style={colorList[index]}></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            {this.state.index == 2 ? (
              <h1>Please wait....{this.state.count}</h1>
            ) : null}
          </Col>
        </Row>
        <Row className="App-1-body" justify="center" align="middle">
          <Col span={6}>
            <Row justify="end" align="middle" style={{ height: "100%" }}>
              {" "}
              <Button
                className="App-1-btn-ctr"
                onClick={this.changeColor2}
                disabled={this.state.index2 == 2 ? true : false}
              >
                {" "}
                Change Light{" "}
              </Button>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col className="App-1-traffic-light">
                <Row justify="center" align="middle" style={{ height: "100%" }}>
                  <Col span={24}>
                    <div
                      className="App-1-light"
                      style={
                        this.state.index2 === 0
                          ? { backgroundColor: "red" }
                          : null
                      }
                    ></div>
                  </Col>
                  <Col span={24}>
                    <div
                      className="App-1-light"
                      style={
                        this.state.index2 === 1
                          ? { backgroundColor: "green" }
                          : null
                      }
                    ></div>
                  </Col>
                  <Col span={24}>
                    <div
                      className="App-1-light"
                      style={
                        this.state.index2 === 2
                          ? { backgroundColor: "yellow" }
                          : null
                      }
                    ></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Row>
    );
  }
}
