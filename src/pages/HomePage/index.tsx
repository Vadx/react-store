import React from "react";
import { Button, Card, Divider, Space, Typography } from "antd";
import Seo from "../../components/SEO";
import { Link } from "react-router-dom";
import { GithubOutlined, CompassOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
  fontWeight: "bold",
  color: "#333",
};

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Home"
        metaDescription="Home page"
        metaKeywords="Home page Keywords"
      />
      <div className="alignCenter pt50">
        <Title>React Template Store using:</Title>
        <Title level={2} type="secondary">
          TypeScript, Ant Design, React Toolkit, RTK Query
        </Title>
      </div>

      <div className="alignCenter">
        <Space>
          <Button
            href="https://github.com/Vadx/react-store"
            target="_blank"
            size="large"
            type="primary"
            icon={<GithubOutlined />}
          >
            Project GitHub Repository
          </Button>
          <Link to="/store">
            <Button size="large" icon={<CompassOutlined />}>
              Go to Product List
            </Button>
          </Link>
        </Space>
      </div>
      <Divider />
      <Card title="🎬 Features" style={{ width: "100%", marginBottom: 30 }}>
        <Card.Grid style={gridStyle}>React V18.2</Card.Grid>
        <Card.Grid style={gridStyle}>TypeScript</Card.Grid>
        <Card.Grid style={gridStyle}>Ant Design</Card.Grid>
        <Card.Grid style={gridStyle}>React Toolkit</Card.Grid>
        <Card.Grid style={gridStyle}>ReactRouterDom V6.4</Card.Grid>
        <Card.Grid style={gridStyle}>SEO support</Card.Grid>
        <Card.Grid style={gridStyle}>Framer-motion</Card.Grid>
        <Card.Grid style={gridStyle}>RTK Query</Card.Grid>
      </Card>

      <Card
        title="🥎  Description"
        bordered={false}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <p>
          An e-commerce project using React, Redux-Toolkit, RTK-query, Ant
          Design, and animation Framer-motion. The e-commerce system designed
          and implemented has a product gallery page that allows users to
          search, filter, and sort products easily.
        </p>
        <p>
          Overall, this e-commerce project has all the necessary features to
          make it functional and user-friendly. It is an exceptional project
          that showcases your skills as a developer and your expertise in using
          various technologies.
        </p>
      </Card>

      <Card
        title="⛳ Pages"
        bordered={false}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <p>
          - <Text code>Home Page</Text>
        </p>
        <p>
          - <Text code>Store Page:</Text> list of products, filter products
          (colors, min/max price), sort products, search, animation product list
        </p>
        <p>
          - <Text code>Product Page</Text>{" "}
        </p>
        <p>- Randomly generated data (Json-server as a backend)</p>
      </Card>
    </>
  );
};

export default HomePage;
