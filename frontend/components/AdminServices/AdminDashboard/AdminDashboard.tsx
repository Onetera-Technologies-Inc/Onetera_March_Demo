import Head from "next/head";
import dynamic from "next/dynamic";
import { Button, Card, Space, Table, TabsProps, Typography } from "antd";
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
import { useState } from "react";

const ContentCards = dynamic(
  () => import("@/components/ContentCards/ContentCards"),
  {
    ssr: false,
  }
);

const AdminDashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

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
          rowSelection={rowSelection}
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
        <Table
          rowSelection={rowSelection}
          dataSource={permitsColumnsData}
          columns={permitsColumns}
        />
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
          rowSelection={rowSelection}
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
      <Button
        type="primary"
        onClick={start}
        disabled={!hasSelected}
        loading={loading}
        style={{ marginTop: "20px" }}
      >
        Notify Residents
      </Button>
      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
      </span>
      <ContentCards items={items} />
    </div>
  );
};

export default AdminDashboard;
