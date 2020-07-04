import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Layout } from 'element-react';
import { Link } from "react-router-dom";
import 'element-theme-default/lib/menu.css';

export default class NavMenu extends Component {
  static PropType = {
    menus: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  onOpen = (e1, e2, e3) => {
    console.log(`onOpen ${e1} ${e2} ${e3}`);
  }

  onClose = (e1, e2, e3) => {
    console.log(`onClose ${e1} ${e2} ${e3}`);
  }

  parseMenu = (menu, index) => {
    return (
      <div>
      <Menu.SubMenu
        index={`${index}`}
        title={<span><i className="el-icon-message"></i>{menu.title}</span>}
      >
        {
          menu.groups.map((group, groupIndex) => {
            return (
              <Menu.ItemGroup
                title={group.text}
              >
                { 
                  menu.subMenus[group.value].map((item, itemIndex) => {
                    return (
                      <Menu.Item
                        index={`${index}-${groupIndex}-${itemIndex}`}
                      >
                        <Link
                          to={`/${item.value}`}
                        >
                          {`${item.text}`}
                        </Link>
                      </Menu.Item>
                    )
                  })
                }

              </Menu.ItemGroup>
            )
          })
        }
        
      </Menu.SubMenu>
      </div>
    )
    
  }

  render() {
    // wangsen
    const { menus } = this.props;
    return (
      <div>
      <Menu
        uniqueOpened
      >
        { menus.map((menu, index) => this.parseMenu(menu, index)) }
      </Menu>
      </div>
    )
  }

  render1() {
    return (
      <Layout.Row className="tac">
        <Layout.Col span={8}>
          <h5>带 icon</h5>
          <Menu defaultActive="2" onOpen={this.onOpen} onClose={this.onClose} theme="dark">
            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">选项1</Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.SubMenu index="1">
                <Menu.ItemGroup title="分组一">
                  <Menu.Item index="1-1">选项1</Menu.Item>
                  <Menu.Item index="1-2">选项2</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
          </Menu>
        </Layout.Col>
        <Layout.Col span={8}>
        <h5>不带 icon</h5>
        <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen} onClose={this.onClose} theme="dark">
          <Menu.SubMenu index="1" title="导航一">
            <Menu.ItemGroup title="分组一">
              <Menu.Item index="1-1">选项1</Menu.Item>
              <Menu.Item index="1-2">选项2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="分组2">
              <Menu.Item index="1-3">选项3</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.Item index="2">导航二</Menu.Item>
          <Menu.Item index="3">导航三</Menu.Item>
        </Menu>
        </Layout.Col>
        <Layout.Col span={8}>
        <h5>分组</h5>
        <Menu mode="vertical" defaultActive="1" className="el-menu-vertical-demo">
          <Menu.ItemGroup title="分组一">
            <Menu.Item index="1"><i className="el-icon-message"></i>导航一</Menu.Item>
            <Menu.Item index="2"><i className="el-icon-message"></i>导航二</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="分组二">
            <Menu.Item index="3"><i className="el-icon-message"></i>导航三</Menu.Item>
            <Menu.Item index="4"><i className="el-icon-message"></i>导航四</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        </Layout.Col>
      </Layout.Row>
    )
  }
};
