import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WaterFall1, WaterFall2, WaterFall3 } from '../component/WaterFall';
import NavMenu from '../component/NavMenu/NavMenu.jsx';
import { Buttons } from "../component/CSSLearning";
import { CubeScene, LineScene } from '../component/ThreeJS';
import { FlexLayout } from '../component/VerticalCenterLayout';

const menus = [
  {
    title: "页面布局",
    groups: [
      {
        text: '瀑布流',
        value: 'waterFall',
      }, {
        text: '垂直居中布局',
        value: 'verticalCenterLayout'
      }
    ],
    subMenus: {
      waterFall: [
        {
          text: '瀑布流1',
          value: 'waterFall1',
        },
        {
          text: '瀑布流2',
          value: 'waterFall2',
        },
        {
          text: '瀑布流3',
          value: 'waterFall3',
        },
      ],
      verticalCenterLayout: [
        {
          text: '垂直居中布局-元素定宽高',
          value: 'verticalCenterLayout-fixWidthAndHeight'
        }, {
          text: '垂直居中布局-元素不定宽高',
          value: 'verticalCenterLayout-notfixWidthAndHeight'
        }, {
          text: 'flex 布局',
          value: 'flexLayout'
        }
      ]
    }
  },
  {
    title: "css学习",
    groups: [
      {
        text: 'css学习',
        value: 'cssLearning',
      }
    ],
    subMenus: {
      cssLearning: [
        {
          text: '按钮样式',
          value: 'cssButton',
        },
      ],
    }
  },
  {
    title: "三维构图",
    groups: [
      {
        text: '三维构图',
        value: 'threeGraph',
      }
    ],
    subMenus: {
      threeGraph: [
        {
          text: '样例1-旋转的正方体',
          value: 'cubeScene',
        },
        {
          text: '样例2-线 三棱锥',
          value: 'lineScene',
        }
      ],
    }
  }
]

export default function Container() {
  return (
    <Router>
      <div id='container'>
        <div id='left' style={{ width: '200px', float: 'left' }}>
          <NavMenu
            menus={menus}
          />
        </div>
        <div id='right' style={{ width: '1500px',float: 'right' }}>
          <Switch>
            <Route path="/waterFall1">
              <WaterFall1 />
            </Route>
            <Route path="/waterFall2">
              <WaterFall2 />
            </Route>
            <Route path="/waterFall3">
              <WaterFall3 />
            </Route>
            <Route path="/cssButton">
              <Buttons />
            </Route>
            <Route path="/verticalCenterLayout-fixWidthAndHeight">
              <div />
            </Route>
            <Route path="/verticalCenterLayout-notfixWidthAndHeight">
              <div />
            </Route>
            <Route path="/flexLayout">
              <FlexLayout />
            </Route>
            <Route path="/beginScene">
              <CubeScene />
            </Route>
            <Route path="/lineScene">
              <LineScene />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
