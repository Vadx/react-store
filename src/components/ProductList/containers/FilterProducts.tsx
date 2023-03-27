import { Col, Divider, Input, Row } from "antd";
import CheckboxColor from "../../CheckboxColor";

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
      <CheckboxColor label="Black" onCheckboxChange={filterProductColor} />
      <CheckboxColor label="Red" onCheckboxChange={filterProductColor} />
      <CheckboxColor label="White" onCheckboxChange={filterProductColor} />
      <CheckboxColor label="Blue" onCheckboxChange={filterProductColor} />
      <CheckboxColor label="Gray" onCheckboxChange={filterProductColor} />
      <CheckboxColor label="Brown" onCheckboxChange={filterProductColor} />
    </>
  );
};

export default FilterProducts;
