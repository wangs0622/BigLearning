import React, { Component } from 'react';
import axios from 'axios';

export default class WaterFall_2 extends Component {
  constructor(props) {
    super(props);
    this.pinsNumberEachLine = 4; // 每行的图片个数
    this.pinWidth = 300; // 每张图片的宽度
    this.waterFallHeight = 800;
    this.commonQueryUrl = './resource/WaterFall/{id}.json'; // 请求接口
    this.commonImageUrl = 'http://hbimg.huabanimg.com/{key}_fw800/format/webp';
    this.state = {
      dataset: []
    };
  }

  componentDidMount = () => {
    // 浏览器跨域访问限制导致无法访问本地json文件
    const url = this.commonQueryUrl.replace('{id}', 1);
    axios.get(url).then(resp => {
      this.setState({ dataset: this.parseResp(resp) });
    });
  };

  parseResp = resp => {
    const pins = resp.data.pins;
    return pins.map(pin => {
      const tempPin = {
        key: pin.file.key,
        width: pin.file.width,
        height: pin.file.height,
        text: pin.raw_text,
        url: this.commonImageUrl.replace('{key}', pin.file.key),
      };
      return tempPin;
    });
  };

  render() {
    return (
      <div>
        <div id="wrapper_2">
          <div id="waterfall_2" style={{ height: `${this.state.waterFallHeight}px` }}>
            {
              this.state.dataset.map(item => (
                <div
                  className="waterfallItem_2"
                  key={item.key}
                >
                  <img
                    src={item.url}
                    width={item.Width}
                    height={Math.floor(item.height / item.width * 300)}
                    alt={''} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}