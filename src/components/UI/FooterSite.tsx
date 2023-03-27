import { Layout, Typography, Divider } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const FooterSite = () => {
  return (
    <Footer className="site-footer">
      <Divider />
      <Text strong>React/TS Store Template</Text>
    </Footer>
  );
};

export default FooterSite;
