import { Col, Divider, Input, Row } from "antd";

interface FilterProductsProps {
  filterProductMinPrice: (event: any) => void;
  filterProductMaxPrice: (event: any) => void;
  filterProductColor: (event: any) => void;
  minPriceValue: number | undefined;
  maxPriceValue: number | undefined;
}

const FilterProducts = ({
  filterProductMinPrice,
  filterProductMaxPrice,
  filterProductColor,
  minPriceValue,
  maxPriceValue,
}: FilterProductsProps) => {
  return (
    <>
      <Divider />
      <Row justify="space-between" gutter={8}>
        <Col span={12} style={{ alignSelf: "center" }}>
          <label className="filter-label" htmlFor="min-price">
            Min Price:
          </label>
          <Input
            id="min-price"
            type="number"
            onChange={filterProductMinPrice}
            value={minPriceValue}
          />
        </Col>
        <Col span={12} style={{ alignSelf: "center" }}>
          <label className="filter-label" htmlFor="max-price">
            Max Price:
          </label>
          <Input
            type="number"
            id="max-price"
            value={maxPriceValue}
            onChange={filterProductMaxPrice}
            className="ant-input-number-input"
          />
        </Col>
      </Row>
      <Divider />
      <span className="filter-label">Colors: </span>
      <label htmlFor="color-black">
        <input
          type="checkbox"
          id="color-black"
          name="color"
          value="Black"
          onChange={filterProductColor}
        />
        Black
      </label>
      <label htmlFor="color-red">
        <input
          type="checkbox"
          id="color-red"
          name="color"
          value="Red"
          onChange={filterProductColor}
        />
        Red
      </label>
      <label htmlFor="color-white">
        <input
          type="checkbox"
          id="color-white"
          name="color"
          value="White"
          onChange={filterProductColor}
        />
        White
      </label>
      <label htmlFor="color-blue">
        <input
          type="checkbox"
          id="color-blue"
          name="color"
          value="Blue"
          onChange={filterProductColor}
        />
        Blue
      </label>
      <label htmlFor="color-gray">
        <input
          type="checkbox"
          id="color-gray"
          name="color"
          value="Gray"
          onChange={filterProductColor}
        />
        Gray
      </label>
      <label htmlFor="color-brown">
        <input
          type="checkbox"
          id="color-brown"
          name="color"
          value="Brown"
          onChange={filterProductColor}
        />
        Brown
      </label>
    </>
  );
};

export default FilterProducts;
