import React from "react";
import { Layout, Menu, Row, Col, Space } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import type { MenuProps } from "antd";

const { Header } = Layout;

const items: MenuProps["items"] = [
  { label: <NavLink to="/">Home</NavLink>, key: "/" },
  { label: <NavLink to="/store">Store</NavLink>, key: "/store" },
  { label: <NavLink to="/about">About</NavLink>, key: "/about" },
];

const HeaderSite: React.FC = () => {
  const location = useLocation();
  return (
    <Header
      data-theme="light"
      className="site-layout-background site-layout-header"
    >
      <Row>
        <Col span={8}>
          <Logo logoColor="#333" logoSize={20}>
            ReactStore
          </Logo>
        </Col>
        <Col span={8} offset={8}>
          <Space>
            <Menu
              style={{ border: 0, background: "transparent" }}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              selectedKeys={[location.pathname]}
              items={items}
            />
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderSite;
