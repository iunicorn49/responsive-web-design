import React, { Component } from "react";
import ad01 from "../../../../image/ad001.png";
import ad02 from "../../../../image/ad002.png";
import ad03 from "../../../../image/ad003.png";

const adList = [{ img: ad01 }, { img: ad02 }, { img: ad03 }];

class Ad extends Component {
  render() {
    return (
      <div className="ad">
        {adList.map((ad, index) => (
          <div className="item" key={index}>
            <img src={ad.img} />
          </div>
        ))}
      </div>
    );
  }
}

export default Ad;
