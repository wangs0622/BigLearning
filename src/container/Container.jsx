import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { WaterFall1, WaterFall2 } from '../component/WaterFall';

export default function Container() {
  return (
    <Router>
      <div id='container'>
        <div id='left' style={{ width: '200px', float: 'left' }}>
          <nav>
            <ul>
              <li>
                <Link to="/WaterFall_1">WaterFall_1</Link>
              </li>
              <li>
                <Link to="/WaterFall_2">WaterFall_1</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id='right' style={{ width: '1500px',float: 'right' }}>
          <Switch>
            <Route path="/WaterFall_1">
              <WaterFall1 />
            </Route>
            <Route path="/WaterFall_2">
              <WaterFall2 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
