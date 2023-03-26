import { Card, Divider, Typography } from "antd";
import { IProduct } from "../models/IProduct";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title, Text } = Typography;

export interface PostItemProps {
  post: IProduct;
}

const ProductItem = ({ post }: PostItemProps) => {
  return (
    <>
      <Card
        style={{ width: "100%", marginBottom: 20 }}
        cover={<img alt="example" src={post.thumbnail} />}
        actions={[
          <Link to={`/store/${post.id}`}>
            Read more <ArrowRightOutlined />
          </Link>,
        ]}
      >
        <Link to={`/store/${post.id}`}>
          <Meta title={post.title} />{" "}
        </Link>
        <Divider>
          <Title level={3}>
            <Text type="secondary">Price: </Text>
            <Text code>${post.price}</Text>
          </Title>
        </Divider>
        <Title level={5}>Rating: {post.rating}</Title>
        <Title level={5}>Color: {post.color}</Title>
        <Text type="secondary">{post.description.substring(0, 70)}</Text>
      </Card>
    </>
  );
};

export default ProductItem;
