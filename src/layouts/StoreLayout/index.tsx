import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterSite from "../../components/UI/FooterSite";
import HeaderSite from "../../components/UI/HeaderSite";
import { motion } from "framer-motion";

const { Content } = Layout;

export default function StoreLayout() {
  return (
    <>
      <Layout className="site-layout">
        <HeaderSite />
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            margin: " 84px auto 0",
            width: "100%",
            maxWidth: 1200,
          }}
        >
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Outlet />
          </motion.div>
        </Content>
        <FooterSite />
      </Layout>
    </>
  );
}
