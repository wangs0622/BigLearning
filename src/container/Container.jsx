import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WaterFall1, WaterFall2, WaterFall3 } from '../component/WaterFall';
import NavMenu from '../component/NavMenu/NavMenu.jsx';
import { Buttons } from "../component/CSSLearning";

const menus = [
  {
    title: "页面布局",
    groups: [
      {
        text: '瀑布流',
        value: 'waterFall',
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
            <Route path="/WaterFall1">
              <WaterFall1 />
            </Route>
            <Route path="/WaterFall2">
              <WaterFall2 />
            </Route>
            <Route path="/WaterFall3">
              <WaterFall3 />
            </Route>
            <Route path="/cssButton">
              <Buttons />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
