import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface SearchProductsProps {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchProducts = ({ search }: SearchProductsProps) => {
  return (
    <>
      <Input
        className="search-products"
        placeholder="Search..."
        onChange={search}
        prefix={<SearchOutlined />}
      />
    </>
  );
};

export default SearchProducts;
