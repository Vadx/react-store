import { Card, Divider, Typography } from "antd";
import { IPost } from "../models/IPost";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title, Text } = Typography;

export interface PostItemProps {
  post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
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
        <Meta title={post.title} />{" "}
        <Divider>
          <Title level={3}>
            <Text type="secondary">Price: </Text>
            <Text code>${post.price}</Text>
          </Title>
        </Divider>
        <Text type="secondary">{post.description.substring(0, 70)}</Text>
      </Card>
    </>
  );
};

export default PostItem;
