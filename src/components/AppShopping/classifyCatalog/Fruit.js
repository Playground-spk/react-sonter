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
    let filterFruit = this.props.productList.filter(item => {
      return item.catalog == "fruit";
    });
    return (
      <Row>
        {filterFruit.map(item => {
          let price = "price " + item.price + " Bath";
          let sendName = item.name;
          return (
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} />}
              >
                <Meta title={item.name} description={price} />
                <Button
                  type="primary"
                  onClick={() => this.props.chooseProduct(item)}
                >
                  add
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}
