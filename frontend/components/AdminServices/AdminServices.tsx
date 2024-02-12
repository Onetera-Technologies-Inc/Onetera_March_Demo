import Head from "next/head";
import dynamic from "next/dynamic";
import { Col, Layout, Row, Typography } from "antd";

const { Header } = Layout;
const AllUserTable = dynamic(
  () => import("@/components/AllUserTable/AllUserTable")
);
const Logout = dynamic(() => import("@/components/Navbar/Logout/Logout"), {
  ssr: false,
});
const SideNav = dynamic(
  () => import("@/components/AdminServices/SideNav/SideNav"),
  {
    ssr: false,
  }
);
const AdminDashboard = dynamic(
  () => import("@/components/AdminServices/AdminDashboard/AdminDashboard"),
  {
    ssr: false,
  }
);

const AdminServicesPage = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logout />
      </Header>
      <Row gutter={50}>
        <Col span={4}>
          <SideNav />
        </Col>
        <Col span={20}>
          <AdminDashboard />
        </Col>
      </Row>

      {/* <Typography.Title level={3} style={{ margin: 0 }}>
        List of All Users
      </Typography.Title>
      <section style={{ marginTop: "20px" }}>
        <AllUserTable />
      </section> */}
    </>
  );
};

export default AdminServicesPage;
