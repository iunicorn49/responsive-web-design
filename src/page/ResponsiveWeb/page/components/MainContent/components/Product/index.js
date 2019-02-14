import React, { Component } from "react";

class Product extends Component {
  render() {
    const { data, total } = this.props;
    const { title, titleEm, products } = data;
    return (
      <section className="product clearfix">
        <h2>
          {title}
          {titleEm.map((emText, index) => (
            <em key={index}>{emText}</em>
          ))}
        </h2>
        <div className="product-content">
          {products.map((product, index) => (
            <div className="item clearfix" key={index}>
              <h3>
                <em>{product.month}</em>
                个月{index === products.length - 1 && "以上"}
                {product.sub && <i>{product.sub}</i>}
              </h3>
              <div className="info">
                <p>
                  约定年化收益率:
                  <span className="year-rate">
                    {product.info}
                    <i>起</i>
                  </span>
                </p>
                <p>
                  {total ? "总成交金额:" : "金额:"}
                  <span className="money">
                    {product.money}
                    <i>万元</i>
                  </span>
                </p>
              </div>
              <div className="buy">
                <a href="#">{product.btnText || "购买"}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Product;
