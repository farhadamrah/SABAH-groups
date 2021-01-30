import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SnippetsOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Logo from '../SVG/logo.jpg';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logoContainer">
        <Link to="/">
          <img className="logo" src={Logo}></img>
        </Link>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <SubMenu key="sub1" icon={<SnippetsOutlined />} title="İxtisaslar">
          <Menu.Item key="1">
            <Link to="/KM">Kompüter Mühəndisliyi</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/XDM">Xarici dil müəllimliyi</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
