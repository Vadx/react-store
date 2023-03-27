import React from "react";
import { Layout, Menu, Row, Col } from "antd";
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
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        <Row justify="space-between">
          <Col>
            <Logo logoColor="#333" logoSize={20}>
              ReactStore
            </Logo>
          </Col>
          <Col>
            <Menu
              style={{ border: 0, background: "transparent" }}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              selectedKeys={[location.pathname]}
              items={items}
            />
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default HeaderSite;
