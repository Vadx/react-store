import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { IPost } from "../models/IPost";
import { Link } from "react-router-dom";

const { Meta } = Card;

export interface PostItemProps {
  post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <>
      <Card
        style={{ width: "100%", marginBottom: 20 }}
        cover={<img alt="example" src={post.thumbnail} />}
        actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
      >
        <Meta
          title={post.title}
          description={post.description.substring(0, 100)}
        />
        <div>{post.price}</div>
        <div className="readMoreWrap">
          <Link to={`/store/${post.id}`}>Read more...</Link>
        </div>
      </Card>
    </>
  );
};

export default PostItem;
