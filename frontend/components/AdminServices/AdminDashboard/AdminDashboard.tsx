import Head from "next/head";
import dynamic from "next/dynamic";
import ContentCards from "@/components/ContentCards/ContentCards";
import { Card, TabsProps, Typography } from "antd";
import { render } from "react-dom";

const AdminDashboard = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <Card size="small" bordered={false}>
          Affordable Housing
        </Card>
      ),
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: (
        <Card size="small" bordered={false}>
          Permits
        </Card>
      ),
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: (
        <Card size="small" bordered={false}>
          Transportation
        </Card>
      ),
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div>
      <h1>Welcome Admin!</h1>
      <Typography.Title level={5} style={{ margin: 0 }}>
        Most popular services @ Glendale
      </Typography.Title>
      <ContentCards items={items} />
    </div>
  );
};

export default AdminDashboard;
