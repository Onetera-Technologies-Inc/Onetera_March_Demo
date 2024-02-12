import Head from "next/head";
import dynamic from "next/dynamic";
import { Col, Layout, MenuProps, Row, Typography } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useState } from "react";

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

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const components: any = {
  "0": <AdminDashboard />,
  "2": <AllUserTable />,
};

const items: MenuItem[] = [
  getItem("Dashboard", "0", <ContainerOutlined />),

  getItem("Services", "sub1", <MailOutlined />, [
    getItem("Affordable Housing", "5"),
    getItem("Permits", "6"),
    getItem("Transportation", "7"),
    getItem("Recreation", "8"),
  ]),

  getItem("Applications", "1", <AppstoreOutlined />, [
    getItem("All Applications", "2"),
    getItem("Pending", "10"),
    getItem("Processed", "11"),
  ]),
];

const AdminServicesPage = () => {
  const [currentKey, setCurrentKey] = useState("dashboard");
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
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
          <SideNav setCurrentKey={setCurrentKey} items={items} />
        </Col>
        <Col span={20}>{components[currentKey] || <AdminDashboard />}</Col>
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
