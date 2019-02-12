import React, { Component } from "react";

const features = [
  {
    title: "安全",
    content: (
      <p>
        国家AAA信用平台
        <br />
        银行资金托管
        <br />
        上市公司背景保证
      </p>
    )
  },
  {
    title: "权威",
    content: (
      <p>
        中央电视台推荐
        <br />
        互联网百强企业
        <br />
        标准起草单位
      </p>
    )
  },
  {
    title: "省心",
    content: (
      <p>
        100元起投
        <br />
        用户利益保障机制
        <br />
        保险公司承保
      </p>
    )
  }
];

class Feature extends Component {
  render() {
    return (
      <section className="feature">
        {features.map((item, index) => (
          <div className="item" key={index}>
            <h3>{item.title}</h3>
            {item.content}
          </div>
        ))}
      </section>
    );
  }
}

export default Feature;
