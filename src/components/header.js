 import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
 import  './header.css'
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
                <Menu.Item>首页</Menu.Item>
                <Menu.Item>编译</Menu.Item>
                <Menu.Item>词法分析</Menu.Item>
                <Menu.Item>语法分析</Menu.Item>
            </Menu>
        </div>
    );
  }
}


export default Header;