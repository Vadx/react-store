import { SortProductsType } from "../../../models/CommonTypes";

interface SortProductsProps {
  sortOrderValue: SortProductsType;
  sortOrderChange: (event: any) => void;
}

const SortProducts = ({
  sortOrderValue,
  sortOrderChange,
}: SortProductsProps) => {
  return (
    <>
      <label htmlFor="sortOrder" className="sort-label">
        Sort by:
      </label>
      <select id="sortOrder" value={sortOrderValue} onChange={sortOrderChange}>
        <option value="">Default List</option>
        <option value="PriceLowToHigh">Price Low to High</option>
        <option value="PriceHighToLow">Price High to Low</option>
        <option value="TopRatingFirst">Top Rating First</option>
      </select>
    </>
  );
};

export default SortProducts;
