import React from "react";
import { postAPI } from "../store/api/postAPI";
import PostItem from "./PostItem";
import { Col, Divider, Input, Row, Layout } from "antd";
import SpinnerPostList from "./SpinnerPostList";

const { Content, Sider } = Layout;

const PostList = () => {
  const [searchTitle, setSearchTitle] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<
    "PriceLowToHigh" | "PriceHighToLow" | "TopRatingFirst"
  >();

  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery({
    title: searchTitle,
    sortBy: sortOrder,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(
      event.target.value as
        | "PriceLowToHigh"
        | "PriceHighToLow"
        | "TopRatingFirst"
    );
  };

  return (
    <>
      <Divider orientation="center">Store</Divider>
      {error && <h1>Something wrong...</h1>}

      <Layout>
        <Sider
          width={220}
          style={{ background: "transparent", paddingRight: 20 }}
        >
          <div>
            <Input placeholder="Search..." size="large" onChange={onChange} />
          </div>
          <Divider />

          <label htmlFor="sortOrder">Sort by:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option value="">Default</option>
            <option value="PriceLowToHigh">Price Low to High</option>
            <option value="PriceHighToLow">Price High to Low</option>
            <option value="TopRatingFirst">Top Rating First</option>
          </select>
        </Sider>
        <Content>
          {isLoading && <SpinnerPostList />}
          <Row gutter={{ xs: 6, sm: 12, md: 22, lg: 28 }}>
            {posts?.map((post) => (
              <Col className="gutter-row" span={8} key={post.id}>
                <PostItem post={post} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default PostList;
