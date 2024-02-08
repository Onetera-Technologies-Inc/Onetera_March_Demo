import { Table, TableColumnsType, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Profile",
    width: 50,
    dataIndex: "profile",
    key: "profile",
    fixed: "left",
  },
  {
    title: "First Name",
    width: 100,
    dataIndex: "firstname",
    key: "name",
    fixed: "left",
  },
  {
    title: "Last Name",
    width: 100,
    dataIndex: "lastname",
    key: "name",
    fixed: "left",
  },
  {
    title: "Address",
    width: 100,
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
];

interface TableRowType extends ServiceType {
  firstname: string;
  lastname: string;
  address: string;
}

const tableData: DataType[] = [
  {
    userId: "user1",
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    firstname: "Kristen",
    lastname: "Dominguez",
    address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
    service: { serviceName: "Permits", key: "service1" },
    key: "user1-service1",
  },
  {
    userId: "user1",
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    firstname: "Kristen",
    lastname: "Dominguez",
    address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
    service: { serviceName: "Affordable Housing", key: "service2" },
    key: "user1-service2",
  },
];

const tableColumns: ColumnsType<TableRowType> = [
  {
    title: "Service Name",
    dataIndex: "serviceName",
    key: "serviceName",
  },
  {
    title: "Service Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const SingleUserTable = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [tableRows, setTableRows] = useState<TableRowType[]>([]);

  useEffect(() => {
    if (typeof userId === "string") {
      const userEntries = tableData.filter((user) => user.userId === userId);
      if (userEntries.length > 0) {
        const rows: TableRowType[] = userEntries.map((entry) => ({
          ...entry.service,
          firstname: entry.firstname,
          lastname: entry.lastname,
          address: entry.address,
        }));
        setTableRows(rows);
      }
    }
  }, [userId]);

  if (tableRows.length === 0) return <p>No services found for this user.</p>;

  return (
    <div>
      <h1>User Services</h1>
      <Table dataSource={tableRows} columns={tableColumns} />
    </div>
  );
};

export default SingleUserTable;
