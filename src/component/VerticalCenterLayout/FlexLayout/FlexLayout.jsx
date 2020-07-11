

import React, { Component } from 'react';
import utils from '../../../common/utils';

export default class FlexLayout extends Component {

  constructor(props) {
    super(props);
    this.randomArrays = utils.getRandomArray(30);
  }

  render() {
    
    return (
      <div id="flexLayout">
        <p> 学习 flex 布局，参考 <a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</a> </p>
        <hr/>
        <p>骰子的布局</p>
        <div className="flexBox-dice">
          <div className="flexBox-dice-item dice1">
            {
              [...Array(1).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
            }
          </div>
          <div className="flexBox-dice-item dice2">
            {
              [...Array(2).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
            }
          </div>
          <div className="flexBox-dice-item dice3">
            {
              [...Array(3).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
            }
          </div>
          <div className="flexBox-dice-item dice4">
            <div id="flexBox-dice4-1" className="flexBox-dice-inner">
              {
                [...Array(2).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
            <div id="flexBox-dice4-2" className="flexBox-dice-inner">
              {
                [...Array(2).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
          </div>
          <div className="flexBox-dice-item dice5">
            <div id="flexBox-dice5-1" className="flexBox-dice-inner">
              {
                [...Array(2).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
            <div id="flexBox-dice5-2" className="flexBox-dice-inner">
              {
                [...Array(1).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
            <div id="flexBox-dice5-3" className="flexBox-dice-inner">
              {
                [...Array(2).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
          </div>
          <div className="flexBox-dice-item dice6">
            <div id="flexBox-dice6-1" className="flexBox-dice-inner">
              {
                [...Array(3).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
            <div id="flexBox-dice6-2" className="flexBox-dice-inner">
              {
                [...Array(3).keys()].map(i => (<div className="flexBox-dice-item-dot"></div>))
              }
            </div>
          </div>
        </div>
        <hr/>

        <h2>1. flex 容器，以及作用在 flex 容器上的 css 样式</h2>
        <p> 1.1： flex-direction 作用</p>
        <div className="flexBox1">
          {
            [...Array(4).keys()].map(i => (<div className="flexBoxItem">{i}</div>))
          }
        </div>
        <hr/>
        <p> 1.2： flex-wrap 作用</p>
        <div className="flexBox2">
          {
            [...Array(30).keys()].map(i => (<div className="flexBoxItem">{i}</div>))
          }
        </div>
        <hr/>
        <p> 1.3： align-item 作用</p>
        <div className="flexBox4">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem">{i}</div>))
          }
        </div>
        <hr/>
        <p> 1.4： justify-content 作用</p>
        <div className="flexBox3">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem">{i}</div>))
          }
        </div>
        <hr/>
        <p> 居中垂直布局</p>
        <div className="flexBox5">
          {
            [...Array(1).keys()].map(i => (<div className="flexBoxItem">{i}</div>))
          }
        </div>
        <hr/>
        <h2>2. flex 容器中的元素，以及作用在 元素上的 css 样式</h2>
        <p> 2.1： order 作用，查看元素在dom中的实际位置</p>
        <div className="flexBox6">
          {
            this.randomArrays.map(i => (<div className="flexBoxItem" style={{ order: i }}>{i}</div>))
          }
        </div>
        <hr/>
        <p> 2.2： flex-grow 作用</p>
        <div className="flexBox6">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem" style={{ flexGrow: i }}>{i}</div>))
          }
        </div>
        <br/>
        <div className="flexBox6">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem" style={{ flexGrow: 1 }}>{i}</div>))
          }
        </div>
        <hr/>
        <p> 2.3： flex-shrink 作用。每个元素的宽度是300，在不换行的时候，除了第零个元素，其他元素会缩小</p>
        <div className="flexBox-flexShrink">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem-flexShrink" style={{ flexShrink: i }}>{i}</div>))
          }
        </div>
        <hr/>
        <p> 2.4： flex-basis 作用。 原本每个元素宽度是 100px， flex-basis 可以让每个元素宽度变成其他的宽度</p>
        <div className="flexBox6">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem" style={{ flexBasis: `${(i+1)*100}px`}}>{i}</div>))
          }
        </div>
        <hr/>
        <p> 2.5： align-self 作用。 可以单独调整某一个元素在 纵轴 上的位置</p>
        <div className="flexBox-alignSelf">
          {
            [...Array(5).keys()].map(i => (<div className="flexBoxItem" style={{ alignSelf: i === 2 ? 'center' : 'auto'}}>{i}</div>))
          }
        </div>
        
      </div>
    )
  }
}