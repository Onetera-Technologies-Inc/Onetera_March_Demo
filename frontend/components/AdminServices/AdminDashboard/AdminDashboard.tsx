import React, { useEffect, useState } from "react";
import { Button, Card, Table, Typography, notification } from "antd";
import {
  affordableHousingColumns,
  permitsColumns,
  transportationColumns,
} from "@/constants/tableColumns";
import {
  affordableHousingColumnsData,
  permitsColumnsData,
  transportationColumnsData,
} from "@/constants/tableData";
import dynamic from "next/dynamic";

type SelectedRowsType = Record<string, React.Key[]>;
const ContentCards = dynamic(() => import("../../ContentCards/ContentCards"), {
  ssr: false,
});

const AdminDashboard = () => {
  const [selectedRows, setSelectedRows] = useState<SelectedRowsType>({});
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [loading, setLoading] = useState(false);
  const [triggerNotification, setTriggerNotification] = useState(false);

  const openNotification = () => {
    notification.open({
      message: "Notification Complete",
      description: `Resident(s) notified`,
    });
  };

  useEffect(() => {
    if (triggerNotification) {
      openNotification();
      setTriggerNotification(false);
    }
  }, [triggerNotification]);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRows({});
      setLoading(false);
      setTriggerNotification(true);
    }, 1000);
  };

  const onSelectChange = (
    selectedRowKeys: any,
    selectedRows: any,
    tabKey: any
  ) => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [tabKey]: selectedRowKeys,
    }));
  };

  const hasSelected = selectedRows[activeTabKey]?.length > 0;

  const rowSelection = (tabKey: string) => ({
    selectedRowKeys: selectedRows[tabKey] || [],
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      onSelectChange(selectedRowKeys, selectedRows, tabKey);
    },
  });

  const tabsItems = [
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
          rowSelection={rowSelection("1")}
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
          dataSource={permitsColumnsData}
          columns={permitsColumns}
          rowSelection={rowSelection("2")}
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
          dataSource={transportationColumnsData}
          columns={transportationColumns}
          rowSelection={rowSelection("3")}
        />
      ),
    },
  ];

  return (
    <div>
      <Typography.Title level={5}>
        Most Popular Services @ Glendale
      </Typography.Title>
      <Button
        type="primary"
        onClick={start}
        disabled={!hasSelected}
        loading={loading}
        style={{ marginBottom: 16 }}
      >
        Notify Residents
      </Button>
      <span style={{ marginLeft: 8 }}>
        {hasSelected
          ? `${selectedRows[activeTabKey]?.length} Resident(s) selected`
          : ""}
      </span>
      <ContentCards
        items={tabsItems}
        activeTabKey={activeTabKey}
        setActiveTabKey={setActiveTabKey}
      />
    </div>
  );
};

export default AdminDashboard;
