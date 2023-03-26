import ProductList from "../../components/ProductList";
import Seo from "../../components/SEO";

const StorePage = () => {
  return (
    <>
      <Seo
        title="Store"
        metaDescription="Store page"
        metaKeywords="Store page Keywords"
      />
      <ProductList />
    </>
  );
};

export default StorePage;
