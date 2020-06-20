import React, { Component } from 'react';
// import axios from 'axios';
import json1 from '../resource/WaterFall_1/1.json'

export default class waterFall_1 extends Component {
  constructor(props) {
    super(props);
    this.gap = 20; // 每张图片与周围图片的间隔大小
    this.pinsNumberEachLine = 4; // 每行的图片个数
    this.pinWidth = 300; // 每张图片的宽度
    this.waterFallWidth = this.pinWidth * this.pinsNumberEachLine + this.gap * (this.pinsNumberEachLine - 1);
    this.waterFallHeight = 800;
    this.commonQueryUrl = './resource/WaterFall/waterFall_111/{id}.json'; // 请求接口
    this.commonImageUrl = 'http://hbimg.huabanimg.com/{key}_fw800/format/webp';
    this.heights = [0, 0, 0, 0]; // 每一列的高度
    this.state = {
      dataset: []
    };
  }

  componentDidMount = () => {
    // 浏览器跨域访问限制导致无法访问本地json文件
    // const url = this.commonQueryUrl.replace('{id}', 1);
    // axios.get(url).then(resp => {
    //   this.setState({ dataset: this.parseResp(resp) });
    // });

    // 直接导入 json 文件模拟网络请求
    const dataList = this.parseResp({ body: json1 });
    this.setState({ dataset: dataList });
  };

  parseResp = resp => {
    const pins = resp.body.pins;
    return pins.map(pin => {
      const tempPin = {
        key: pin.file.key,
        width: pin.file.width,
        height: pin.file.height,
        text: pin.raw_text,
        url: this.commonImageUrl.replace('{key}', pin.file.key),
      };
      this.getPosition(tempPin);
      return tempPin;
    });
  };

  getPosition = pin => {
    const { minHeight, minHeightIndex } = this.getMinHeightAndIndex();
    pin.top = minHeight;
    pin.left = minHeightIndex * (this.pinWidth + this.gap);
    this.heights[minHeightIndex] += Math.floor((pin.height / pin.width) * 300 + this.gap)
  };

  getMinHeightAndIndex = () => {
    let minHeight = this.heights[0];
    let minHeightIndex = 0;
    this.heights.forEach((height, index) => {
      if (height < minHeight) {
        minHeight = height;
        minHeightIndex = index;
      }
    });
    return {minHeight, minHeightIndex};
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="waterfall" style={{ height: `${this.state.waterFallHeight}px` }}>
            {
              this.state.dataset.map(item => (
                <div
                  className="waterfallItem"
                  style={{
                    top: `${item.top}px`,
                    left: `${item.left}px`
                  }}
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