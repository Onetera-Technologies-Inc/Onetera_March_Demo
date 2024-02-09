import { Layout, Typography } from "antd";
import dynamic from "next/dynamic";

const { Header } = Layout;
const AllUserTable = dynamic(
  () => import("@/components/AllUserTable/AllUserTable")
);
const Logout = dynamic(() => import("@/components/Navbar/Logout/Logout"), {
  ssr: false,
});

const AdminLandingPage = () => {
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
      <Typography.Title level={3} style={{ margin: 0 }}>
        List of All Users
      </Typography.Title>
      <section style={{ marginTop: "20px" }}>
        <AllUserTable />
      </section>
    </>
  );
};

export default AdminLandingPage;
