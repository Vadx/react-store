import React from "react";
import { productAPI } from "../store/api/productAPI";
import ProductItem from "./ProductItem";
import { Col, Divider, Input, Row, Layout } from "antd";
import SpinnerList from "./SpinnerList";
import { StoreColors } from "../models/CommonTypes";

const { Content, Sider } = Layout;

const ProductList = () => {
  const [searchTitle, setSearchTitle] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<
    "PriceLowToHigh" | "PriceHighToLow" | "TopRatingFirst"
  >();
  const [minPrice, setMinPrice] = React.useState<number | undefined>();
  const [maxPrice, setMaxPrice] = React.useState<number | undefined>();
  const [colors, setColors] = React.useState<StoreColors[] | string[]>([]);

  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = productAPI.useFetchAllPostsQuery({
    searchTitle: searchTitle,
    sortBy: sortOrder,
    minPrice: minPrice,
    maxPrice: maxPrice,
    colors: colors,
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

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMinPrice(isNaN(value) ? undefined : value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMaxPrice(isNaN(value) ? undefined : value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setColors((prevColors) => [...prevColors, value]);
    } else {
      setColors((prevColors) => prevColors.filter((color) => color !== value));
    }
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

          <Divider />
          <div>
            <label htmlFor="min-price">Min Price:</label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </div>
          <div>
            <label htmlFor="max-price">Max Price:</label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
          <Divider />
          <span>Colors: </span>
          <label htmlFor="color-black">
            <input
              type="checkbox"
              id="color-black"
              name="color"
              value="Black"
              onChange={handleColorChange}
            />
            Black
          </label>
          <label htmlFor="color-red">
            <input
              type="checkbox"
              id="color-red"
              name="color"
              value="Red"
              onChange={handleColorChange}
            />
            Red
          </label>
          <label htmlFor="color-white">
            <input
              type="checkbox"
              id="color-white"
              name="color"
              value="White"
              onChange={handleColorChange}
            />
            White
          </label>
          <label htmlFor="color-blue">
            <input
              type="checkbox"
              id="color-blue"
              name="color"
              value="Blue"
              onChange={handleColorChange}
            />
            Blue
          </label>
          <label htmlFor="color-gray">
            <input
              type="checkbox"
              id="color-gray"
              name="color"
              value="Gray"
              onChange={handleColorChange}
            />
            Gray
          </label>
          <label htmlFor="color-brown">
            <input
              type="checkbox"
              id="color-brown"
              name="color"
              value="Brown"
              onChange={handleColorChange}
            />
            Brown
          </label>
        </Sider>
        <Content>
          {(isLoading || isFetching) && <SpinnerList />}
          <Row gutter={{ xs: 6, sm: 12, md: 22, lg: 28 }}>
            {posts?.map((post) => (
              <Col className="gutter-row" span={8} key={post.id}>
                <ProductItem post={post} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ProductList;
