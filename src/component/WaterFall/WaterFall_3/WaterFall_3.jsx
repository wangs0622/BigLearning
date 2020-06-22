import React, { Component } from 'react';
import axios from 'axios';

export default class WaterFall_3 extends Component {
  constructor(props) {
    super(props);
    this.gap = 20; // 每张图片与周围图片的间隔大小
    this.pinsNumberEachLine = 4; // 每行的图片个数
    this.pinWidth = 300; // 每张图片的宽度
    this.waterFallWidth = this.pinWidth * this.pinsNumberEachLine + this.gap * (this.pinsNumberEachLine - 1);
    this.waterFallHeight = 800;
    this.commonQueryUrl = './resource/WaterFall/{id}.json'; // 请求接口
    this.commonImageUrl = 'http://hbimg.huabanimg.com/{key}_fw800/format/webp';
    this.heights = [0, 0, 0, 0]; // 每一列的高度
    this.state = {
      dataset: []
    };
    this.queryId = 1;
  }

  componentDidMount = () => {
    const url = this.commonQueryUrl.replace('{id}', this.queryId++);
    axios.get(url).then(resp => {
      this.setState({ dataset: this.parseResp(resp) });
    });
    // window.onscroll = this.handleScroll;
  };

  parseResp = resp => {
    console.log(resp);
    const pins = resp.data.pins;
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

  handleScroll = () => {
    // eslint-disable-next-line no-undef
    const offsetTop = $('#bottom').offset().top;
    const clientHieght = document.documentElement.clientHeight;
    if (offsetTop - clientHieght < 1.5 * clientHieght) {
      const url = this.commonQueryUrl.replace('{id}', this.queryId++);
      console.log(url);
      let { dataset } = this.state;
      axios.get(url).then(resp => {
        dataset = dataset.concat(this.parseResp(resp));
        this.setState({ dataset });
    });
    }
  }

  render() {
    return (
      <div>
        <div id="wrapper_3">
          <div
            id="waterfall_3"
            style={{ height: `${this.state.waterFallHeight}px` }}
            onWheel={this.handleScroll}
          >
            {
              this.state.dataset.map(item => (
                <div
                  className="waterfallItem_3"
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
            <div
              id="bottom"
              style={{left: '0px', top: `${Math.max.apply(null, this.heights)}px`, position: 'absolute'}}>
              加载中...
          </div>
          </div>
        </div>
      </div>
    );
  }
}