import { Card, Divider, Typography, Space } from "antd";
import { IProduct } from "../models/IProduct";
import { Link } from "react-router-dom";
import { BgColorsOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";

const { Meta } = Card;
const { Text, Title } = Typography;

export interface PostItemProps {
  post: IProduct;
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ProductItem = ({ post }: PostItemProps) => {
  return (
    <Link to={`/store/${post.id}`}>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={post.thumbnail} />}
        actions={[
          <IconText
            icon={StarOutlined}
            text={`${post.rating}`}
            key="list-vertical-star-o"
          />,
          <IconText
            icon={BgColorsOutlined}
            text={`${post.color}`}
            key="list-vertical-like-o"
          />,
        ]}
      >
        <Meta title={post.title} />
        <Divider>
          <Title level={3}>
            <Text type="secondary">Price: </Text>
            <Text code>${post.price}</Text>
          </Title>
        </Divider>
        <Text type="secondary">{post.description.substring(0, 70)}</Text>
      </Card>
    </Link>
  );
};

export default ProductItem;
