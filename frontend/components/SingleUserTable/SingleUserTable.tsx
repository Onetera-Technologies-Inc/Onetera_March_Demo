import React, { useState, useEffect } from 'react';
import { Descriptions, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import router from 'next/router';

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

const UserDetailTables: React.FC<{ userId: string }> = ({ userId }) => {
  const [personalDetails, setPersonalDetails] = useState<DataType | null>(null);
  const [serviceRows, setServiceRows] = useState<ServiceType[]>([]);

  useEffect(() => {
    const userEntries = tableData.filter(user => user.userId === userId);
    if (userEntries.length > 0) {
      setPersonalDetails(userEntries[0]);

      setServiceRows(userEntries.map(entry => ({
        ...entry.service,
        key: entry.service.key,
      })));
    }
  }, [userId]);

  const serviceColumns: ColumnsType<ServiceType> = [
    {
      title: 'Service Name',
      dataIndex: 'serviceName',
      key: 'serviceName',
    },
    {
      title: 'Service Key',
      dataIndex: 'key',
      key: 'key',
    },
  ];

  return (
    <>
      {personalDetails && (
        <Descriptions title="Personal Details" bordered column={1}>
          <Descriptions.Item label="First Name">{personalDetails.firstname}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{personalDetails.lastname}</Descriptions.Item>
          <Descriptions.Item label="Address">{personalDetails.address}</Descriptions.Item>
        </Descriptions>
      )}
      <Table
        dataSource={serviceRows}
        columns={serviceColumns}
        rowKey="key"
        pagination={false}
        style={{ marginTop: '20px' }}
        onRow={(record) => ({
          onClick: () => {
            console.log(record)
            router.push(`/singleUserApplication/services?serviceKey=${encodeURIComponent(record.key)}&userId=${encodeURIComponent(userId)}`);
          }
        })}
      />
    </>
  );
};

export default UserDetailTables;
