import React from "react";
import { postAPI } from "../store/api/postAPI";
import PostItem from "./PostItem";
import { Col, Divider, Input, Row } from "antd";
import SpinnerPostList from "./SpinnerPostList";
// import { IProduct } from "../models/IProduct";

const PostList = () => {
  // const [limit, setLimit] = React.useState<number>(9);
  const [searchTitle, setSearchTitle] = React.useState<string>("");
  const deferredSearch = React.useDeferredValue(searchTitle);
  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(deferredSearch);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  return (
    <>
      <div>
        <Input
          placeholder="What are you looking for?"
          size="large"
          onChange={onChange}
        />
      </div>
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
