import React, { Component } from "react";
import { Layout, Col, Button, Row } from "antd";
import "antd/dist/antd.css";
import Tab1 from "./components/AppTabComponents/Tab1";
import Tab2 from "./components/AppTabComponents/Tab2";
import Tab3 from "./components/AppTabComponents/Tab3";

export default class AppTabComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [<Tab1 />, <Tab2 />, <Tab3 />],
      selectedTab: 0
    };
  }
  changeTab = tab => {
    this.setState({ selectedTab: tab });
  };
  render() {
    return (
      <div>
        <Button onClick={() => this.changeTab(0)}>tab1</Button>
        <Button onClick={() => this.changeTab(1)}>tab2</Button>
        <Button onClick={() => this.changeTab(2)}>tab3</Button>
        <div>{this.state.tabs[this.state.selectedTab]}</div>
      </div>
    );
  }
}
