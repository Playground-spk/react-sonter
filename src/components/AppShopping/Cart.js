import React, { Component } from "react";
import { Button, Row, Col } from "antd";

export default class Cart extends Component {
  render() {
    // let filterCart = this.props.productList.filter(item => {
    //   for (let key of this.props.selectProduct) {
    //     return item.name == key;
    //   }
    // });
    let total = 0;
    for (let key of this.props.selectProduct) {
      total += key.price * key.amount;
    }

    return (
      <div style={{ width: "100%" }}>
        {this.props.selectProduct.map((item, index) => {
          let totalPrice = item.price * item.amount;
          return (
            <Row justify="start" style={{ width: "100%" }}>
              <Col span={5}>
                <img
                  src={item.image}
                  style={{ width: "50px", height: "50px" }}
                />
                {item.name}
              </Col>
              <Col span={8}>
                <Row justify="start" style={{ width: "100%" }}>
                  <Col span={8}>
                    <Button onClick={() => this.props.minerAmount(index)}>
                      {" "}
                      -
                    </Button>
                  </Col>
                  <Col span={8}>{item.amount} ชิ้น</Col>

                  <Col span={8}>
                    {" "}
                    <Button onClick={() => this.props.plusAmount(index)}>
                      {" "}
                      +
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={7}>
                &nbsp;&nbsp;&nbsp;{totalPrice}&nbsp;&nbsp; bath
              </Col>
              <Col span={4}>
                <Button onClick={() => this.props.deleteProductInCart(index)}>
                  ยกเลิก
                </Button>
              </Col>
            </Row>
          );
        })}

        <div className="App-6-cart-total  ">
          {" "}
          <h1>Total</h1> {total} bath
        </div>
      </div>
    );
  }
}
