import React from "react";
import { productAPI } from "../../store/api/productAPI";
import ProductItem from "../ProductItem";
import { Col, Divider, Row, Layout, Popover, Button } from "antd";
import SpinnerList from "../SpinnerList";
import { SortProductsType, StoreColors } from "../../models/CommonTypes";
import FilterProducts from "./containers/FilterProducts";
import SortProducts from "./containers/SortProducts";
import { FilterOutlined } from "@ant-design/icons";
import SearchProducts from "./containers/SearchProducts";

const { Content } = Layout;

const ProductList = () => {
  const [searchTitle, setSearchTitle] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<SortProductsType>();
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

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value as SortProductsType);
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

  const [openFilter, setOpenFilter] = React.useState(false);

  const hide = () => {
    setOpenFilter(false);
  };

  const handleOpenFilter = (newOpen: boolean) => {
    setOpenFilter(newOpen);
  };

  return (
    <>
      <Layout>
        <Divider orientation="center">All Products</Divider>
        {error && <h1>Something wrong...</h1>}

        <Row justify="space-between">
          <Col span={12} style={{ alignSelf: "center" }}>
            <SortProducts
              sortOrderValue={sortOrder}
              sortOrderChange={handleSortOrderChange}
            />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Popover
              content={
                <>
                  <FilterProducts
                    minPriceValue={minPrice}
                    maxPriceValue={maxPrice}
                    filterProductMinPrice={handleMinPriceChange}
                    filterProductMaxPrice={handleMaxPriceChange}
                    filterProductColor={handleColorChange}
                  />
                  <Divider />
                  <Button type="dashed" onClick={hide}>
                    Close
                  </Button>
                </>
              }
              trigger="click"
              open={openFilter}
              onOpenChange={handleOpenFilter}
            >
              <Button type="text" icon={<FilterOutlined />}>
                Filter
              </Button>
            </Popover>
            <SearchProducts search={onChangeSearch} />
          </Col>
        </Row>

        <Divider />

        <Content>
          {(isLoading || isFetching) && <SpinnerList />}
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {posts?.map((post) => (
              <Col
                className="gutter-row"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                key={post.id}
                style={{ marginBottom: 20 }}
              >
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
