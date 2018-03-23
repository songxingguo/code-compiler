 import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
 import  './header.css'
 import Select from './select.js'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
        <div id="components-layout-demo-fixed">
            <div className="logo" />
            <Menu mode="horizontal">
                <SubMenu title="文件">
                    <Menu.Item><Select/></Menu.Item>
                </SubMenu>
                <Menu.Item>词法分析</Menu.Item>
                <Menu.Item>语法分析</Menu.Item>
                <Menu.Item>中间代码生成</Menu.Item>
                <Menu.Item>目标代码生成</Menu.Item>
            </Menu>
        </div>
    );
  }
}

export default Header;