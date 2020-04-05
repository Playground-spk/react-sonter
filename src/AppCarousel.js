import React, { Component } from "react";
import { Row, Col, Button } from "antd";

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      pictureList: [
        "https://mpics.mgronline.com/pics/Images/562000009111301.JPEG",
        "https://s359.kapook.com/rq/580/435/50/pagebuilder/64132db2-79cd-4885-ace1-143e3dbee87d.jpg",
        "https://buzzebees.blob.core.windows.net/backofficehtmleditor/20180205-152543-_ac40ca25-c093-4437-a8e3-bcbb9d308691.jpg",
        "https://mpics.mgronline.com/pics/Images/559000006939201.JPEG",
        "https://www.goddesszilla.com/wp-content/uploads/2017/07/CXDKBVRUwAAApp7.jpg",
      ],
    };
  }
  next = () => {
    //ternary
    this.state.index == this.state.pictureList.length - 1
      ? this.setState({ index: 0 })
      : this.setState((prevState) => ({
          index: prevState.index + 1,
        }));
  };
  previous = () => {
    //if else
    let ret = this.state.index;
    if (this.state.index === 0) {
      ret = this.state.pictureList.length - 1;
    } else {
      ret--;
    }
    this.setState({ index: ret });
  };

  render() {
    let pic = this.state.pictureList;
    return (
      <div>
        <Row align="middle">
          <Col span={8}>
            <Row justify="end">
              {" "}
              <Button onClick={this.previous}>previous</Button>
            </Row>
          </Col>
          <Col span={6}>
            <img src={pic[this.state.index]} width="100%" height="100%" />
          </Col>
          <Col span={8}>
            <Button onClick={this.next}> next</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
