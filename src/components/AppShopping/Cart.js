import React, { Component } from "react";
import { Button } from "antd";

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
      <div>
        <ul>
          {this.props.selectProduct.map((item, index) => {
            let totalPrice = item.price * item.amount;
            return (
              <li>
                {item.name}
                &nbsp;
                <Button onClick={() => this.props.minerAmount(index)}>
                  {" "}
                  -
                </Button>
                {item.amount} ชิ้น
                <Button onClick={() => this.props.plusAmount(index)}> +</Button>
                &nbsp;&nbsp;
                {totalPrice}&nbsp;&nbsp; bath
                <Button onClick={() => this.props.deleteProductInCart(index)}>
                  ยกเลิก
                </Button>
              </li>
            );
          })}
        </ul>
        <div>
          {" "}
          <h1>Total</h1> {total} bath
        </div>
      </div>
    );
  }
}
