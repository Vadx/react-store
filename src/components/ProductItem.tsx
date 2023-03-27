import { Card, Divider, Typography, Space } from "antd";
import { IProduct } from "../models/IProduct";
import { Link } from "react-router-dom";
import { BgColorsOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";

const { Meta } = Card;
const { Text } = Typography;

export interface PostItemProps {
  post: IProduct;
}

const IconText = ({
  icon,
  text,
  color,
}: {
  icon: React.FC;
  text: string;
  color?: string;
}) => (
  <Space style={{ color: `${color}` }}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const IconColor = ({ color }: { color: string }) => (
  <div>
    <BgColorsOutlined style={{ fontSize: "18px", marginRight: 5 }} />
    <span
      style={{
        backgroundColor: `${color}`,
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "1px solid #777",
        display: "inline-flex",
      }}
    />
  </div>
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
          <IconColor color={`${post.color}`} />,
          <Text style={{ margin: 0, fontWeight: 600 }}>
            <Text type="secondary">Price: </Text>
            <Text code>${post.price}</Text>
          </Text>,
        ]}
      >
        <Meta title={post.title} />
        <Divider />
        <Text type="secondary">{post.description.substring(0, 70)}</Text>
      </Card>
    </Link>
  );
};

export default ProductItem;
