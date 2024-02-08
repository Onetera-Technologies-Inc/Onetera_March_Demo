import { useEffect, useState } from "react";
import { Avatar, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import AllUserTableActions from "./AllUserTableActions";
import { useRouter } from "next/router";

interface ServiceType {
  serviceName: string;
  key: string;
}

interface DataType {
  key: string;
  userId: string;
  profile: string;
  firstname: string;
  lastname: string;
  service: ServiceType;
  address: string;
  date: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
    fixed: "left",
    render: profile => <Avatar src={profile} alt="Profile" />
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

const tableData: DataType[] = [
  {
    userId: "user1",
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    firstname: "Kristen",
    lastname: "Dominguez",
    address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
    service: { serviceName: "Permits", key: "service1" },
    date: "12 January 2024",
    key: "user1-service1",
  },
  {
    userId: "user1",
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    firstname: "Kristen",
    lastname: "Dominguez",
    address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
    service: { serviceName: "Affordable Housing", key: "service2" },
    date: "22 January 2024",
    key: "user1-service2",
  },
];

const AllUserTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState("All Applications");

  // const updatedColumns: TableColumnsType<DataType> = columns.map(column => {
  //   if (column.key === 'operation') {
  //     return {
  //       ...column,
  //       render: (_, record) => (
  //         <AllUserTableActions onClick={(e: React.MouseEvent) => e.stopPropagation()} />
  //       ),
  //     };
  //   }
  //   return column;
  // });

  useEffect(() => {
    if (selectedTag === "All Applications") {
      setData(tableData);
    } else {
      const filteredData = tableData.filter(
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
