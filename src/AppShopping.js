import React, { Component } from "react";
import "antd/dist/antd.css";
import "./css/Appshopping.css";
import { Layout, Col, Button, Row } from "antd";
import allProducts from "./components/AppShopping/catalogInstate";
import InSider from "./components/AppShopping/InSider";
import Food from "./components/AppShopping/classifyCatalog/Food";
import Fruit from "./components/AppShopping/classifyCatalog/Fruit";
import Goods from "./components/AppShopping/classifyCatalog/Goods";
import Cart from "./components/AppShopping/Cart";
const { Header, Footer, Sider, Content } = Layout;

export default class AppShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: allProducts,
      indexClassify: 0,
      selectProduct: [],
    };
  }
  changeClassify = (index) => {
    this.setState({ indexClassify: index });
  };
  chooseProduct = (choose) => {
    let newChoose = [...this.state.selectProduct];
    for (let key of newChoose) {
      if (key.name == choose.name) {
        key.amount += 1;
      }
    }
    newChoose.push(choose);
    let setSelect = new Set(newChoose);
    let sendThis = [];
    for (let key of setSelect) {
      sendThis.push(key);
    }
    this.setState({ selectProduct: sendThis });

    // this.setState({
    //   selectProduct: [...this.state.selectProduct, choose.sendName]
    // });
  };
  deleteProductInCart = (idx) => {
    let selectProduct = [...this.state.selectProduct];
    selectProduct.splice(idx, 1);
    this.setState({ selectProduct: selectProduct });
  };

  plusAmount = (index) => {
    let selectProduct = [...this.state.selectProduct];
    selectProduct[index].amount += 1;
    this.setState({ selectProduct: selectProduct });
  };

  minerAmount = (index) => {
    let selectProduct = [...this.state.selectProduct];
    selectProduct[index].amount -= 1;
    this.setState({ selectProduct: selectProduct });
  };

  render() {
    let catalog = [
      <Food
        productList={this.state.productList}
        chooseProduct={this.chooseProduct}
      />,
      <Fruit
        productList={this.state.productList}
        chooseProduct={this.chooseProduct}
      />,
      <Goods
        productList={this.state.productList}
        chooseProduct={this.chooseProduct}
      />,
    ];
    return (
      <div>
        <Layout>
          <Header>Sod.. Sod.. Market</Header>
          <Layout>
            <Sider>
              <InSider
                productList={this.state.productList}
                changeClassify={this.changeClassify}
              />
            </Sider>
            <Content>
              <Row>
                <Col span={16}>
                  <Row>{catalog[this.state.indexClassify]}</Row>
                </Col>

                <Col span={8}>
                  <Row style={{ width: "100%", height: "75px" }}>
                    <Col span={8} className="App-6-cart-header ">
                      <Row
                        style={{ width: "100%", height: "100%" }}
                        justify="center"
                        align="middle"
                      >
                        <Col span={16}>รายการ</Col>
                        <Col span={8} className="App-6-cart-head-border"></Col>
                      </Row>
                    </Col>
                    <Col span={6} className="App-6-cart-header ">
                      <Row
                        style={{ width: "100%", height: "100%" }}
                        justify="center"
                        align="middle"
                      >
                        <Col span={16}>จำนวน</Col>
                        <Col span={8} className="App-6-cart-head-border"></Col>
                      </Row>
                    </Col>
                    <Col span={10} className="App-6-cart-header ">
                      {" "}
                      ราคา
                    </Col>
                  </Row>
                  <Row>
                    <Cart
                      style={{ width: "100%" }}
                      selectProduct={this.state.selectProduct}
                      productList={this.state.productList}
                      deleteProductInCart={this.deleteProductInCart}
                      plusAmount={this.plusAmount}
                      minerAmount={this.minerAmount}
                    />
                  </Row>
                </Col>
              </Row>
            </Content>
          </Layout>
          <Footer>Welcome to my Shopping Cart base on react antd </Footer>
        </Layout>
      </div>
    );
  }
}
