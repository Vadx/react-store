import { Button, Divider, Card, Descriptions, Skeleton } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { productAPI } from "../../store/api/productAPI";
import { ArrowLeftOutlined } from "@ant-design/icons";

const SingleProductPage = () => {
  const { postId } = useParams();
  const goBack = () => navigate(-1);
  const navigate = useNavigate();
  const {
    data: post,
    isFetching,
    isError,
  } = productAPI.useGetSinglePostQuery(postId);
  return (
    <>
      <Button type="text" onClick={goBack} icon={<ArrowLeftOutlined />}>
        Go back
      </Button>
      <Divider />
      {isFetching && (
        <Card>
          <Skeleton />
        </Card>
      )}
      {isError && <>Something goes Wrong</>}
      {post && (
        <Card>
          <Descriptions title={post.title} layout="vertical">
            <Descriptions.Item label="Price">${post.price}</Descriptions.Item>
            <Descriptions.Item label="Rating">{post.rating}</Descriptions.Item>
            <Descriptions.Item label="Color">{post.color}</Descriptions.Item>
            <Descriptions.Item label="Description">
              {post.description}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </>
  );
};

export default SingleProductPage;