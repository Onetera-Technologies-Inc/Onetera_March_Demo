import { useEffect, useState } from "react";
import { Avatar, Table, Tag, Typography } from "antd";
import type { TableColumnsType } from "antd";
import { useRouter } from "next/router";
import { DataType, ServiceType } from "../../constants/types";
import { allUserData } from "../../constants/tableData";
import dynamic from "next/dynamic";

const AllUserTableActions = dynamic(() => import("./AllUserTableActions"), {
  ssr: false,
});

const columns: TableColumnsType<DataType> = [
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
    fixed: "left",
    render: (profile) => <Avatar src={profile} alt="Profile" />,
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "name",
    fixed: "left",
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "name",
    fixed: "left",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "age",
    fixed: "left",
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
    fixed: "left",
    render: (service: ServiceType) => (
      <Tag color="blue">{service.serviceName}</Tag>
    ),
  },
  {
    title: "Application Date",
    dataIndex: "date",
    key: "date",
    fixed: "left",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    render: () => <AllUserTableActions />,
  },
];

const AllUserTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState("All Applications");

  useEffect(() => {
    if (selectedTag === "All Applications") {
      setData(allUserData);
    } else {
      const filteredData = allUserData.filter(
        (item) => item.service.serviceName === selectedTag
      );
      setData(filteredData);
    }
  }, [selectedTag]);

  const tags = [
    { name: "All Applications", color: "blue" },
    { name: "Affordable Housing", color: "green" },
    { name: "Permits", color: "volcano" },
    { name: "Archived Applications", color: "gold" },
  ];

  function handleClick(name: any): void {
    setSelectedTag(name);
  }

  return (
    <>
      <Typography.Title level={3} style={{ margin: 0 }}>
        List of All Users
      </Typography.Title>
      <div style={{ padding: "20px" }}>
        {tags.map((tag: any) => (
          <Tag
            key={tag.name}
            color={selectedTag === tag.name ? "magenta" : tag.color}
            onClick={() => handleClick(tag.name)}
            style={{ cursor: "pointer", margin: "5px" }}
          >
            {tag.name}
          </Tag>
        ))}
      </div>

      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => router.push(`/singleUserApplication/${record.userId}`),
        })}
        rowKey="key"
      />
    </>
  );
};

export default AllUserTable;
