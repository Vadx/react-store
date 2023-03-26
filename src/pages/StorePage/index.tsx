import PostList from "../../components/PostList";
import Seo from "../../components/SEO";

const StorePage = () => {
  return (
    <>
      <Seo
        title="Store"
        metaDescription="Store page"
        metaKeywords="Store page Keywords"
      />
      <PostList />
    </>
  );
};

export default StorePage;
