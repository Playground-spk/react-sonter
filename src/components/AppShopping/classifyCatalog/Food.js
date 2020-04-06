import React, { Component } from "react";
import { Card, Col, Button, Row } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let filterFood = this.props.productList.filter((item) => {
      return item.catalog == "food";
    });
    return (
      <Row>
        {filterFood.map((item) => {
          let price = "price " + item.price + " Bath";
          let sendName = item.name;
          return (
            <Col
              span={8}
              className="App-6-item"
              style={{ width: "240px", height: "240px" }}
            >
              <Row
                style={{
                  width: "240px",
                  height: "120px",
                  margin: "auto",
                  display: "block",
                }}
              >
                <img
                  src={item.image}
                  style={{ width: "100%", height: "100%" }}
                />
              </Row>
              <Row style={{ width: "240px", height: "80px" }}>
                <h1>{item.name}</h1> <h2>{item.price} Bath </h2>
              </Row>
              <Row style={{ width: "240px", height: "40px" }}>
                <Button
                  type="primary"
                  onClick={() => this.props.chooseProduct(item)}
                >
                  ADD
                </Button>
              </Row>
            </Col>
          );
        })}
      </Row>
    );
  }
}
