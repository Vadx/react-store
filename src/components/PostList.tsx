import { postAPI } from "../store/api/postAPI";
import PostItem from "./PostItem";
import { Col, Divider, Row } from "antd";
import SpinnerPostList from "./SpinnerPostList";
// import { IPost } from "../models/IPost";

const PostList = () => {
  // const [limit, setLimit] = React.useState<number>(9);
  const {
    data: posts = [],
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(9);

  return (
    <>
      <Divider orientation="center">Store</Divider>
      {isLoading && <SpinnerPostList />}
      {error && <h1>Something wrong...</h1>}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {posts?.map((post) => (
          <Col className="gutter-row" span={8} key={post.id}>
            <PostItem post={post} />
          </Col>
        ))}
      </Row>
      {/* <Divider /> */}
    </>
  );
};

export default PostList;
