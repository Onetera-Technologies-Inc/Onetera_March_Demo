import Head from "next/head";
import dynamic from "next/dynamic";
import { Card, Table, TabsProps, Typography } from "antd";
import {
  affordableHousingColumnsData,
  permitsColumnsData,
  transportationColumnsData,
} from "@/constants/tableData";
import {
  affordableHousingColumns,
  permitsColumns,
  transportationColumns,
} from "@/constants/tableColumns";

const ContentCards = dynamic(
  () => import("@/components/ContentCards/ContentCards"),
  {
    ssr: false,
  }
);

const AdminDashboard = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <Card size="small" bordered={false}>
          Affordable Housing
        </Card>
      ),
      children: (
        <Table
          dataSource={affordableHousingColumnsData}
          columns={affordableHousingColumns}
        />
      ),
    },
    {
      key: "2",
      label: (
        <Card size="small" bordered={false}>
          Permits
        </Card>
      ),
      children: (
        <Table dataSource={permitsColumnsData} columns={permitsColumns} />
      ),
    },
    {
      key: "3",
      label: (
        <Card size="small" bordered={false}>
          Transportation
        </Card>
      ),
      children: (
        <Table
          dataSource={transportationColumnsData}
          columns={transportationColumns}
        />
      ),
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
