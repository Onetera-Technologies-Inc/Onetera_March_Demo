import React, { useState, useEffect } from 'react';
import { Avatar, Col, Descriptions, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import router from 'next/router';
import { DataType,ServiceType } from '../../constants/types';
import { allUserData } from '../../constants/tableData'; 

const UserDetailTables: React.FC<{ userId: string }> = ({ userId }) => {
  const [personalDetails, setPersonalDetails] = useState<DataType | null>(null);
  const [serviceRows, setServiceRows] = useState<ServiceType[]>([]);

  useEffect(() => {
    const userEntries = allUserData.filter(user => user.userId === userId);
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
        <Row gutter={[16, 24]}>
        <Col xs={24} sm={8} md={6} lg={4} xl={4}>
          <Avatar src={personalDetails.profile} alt="Profile" style={{ width: '100%', height: 'auto', maxWidth: '160px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </Col>
        <Col xs={24} sm={16} md={18} lg={20} xl={20}>
          <Descriptions title="Personal Details" bordered column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
            <Descriptions.Item label="First Name">{personalDetails.firstname}</Descriptions.Item>
            <Descriptions.Item label="Last Name">{personalDetails.lastname}</Descriptions.Item>
            <Descriptions.Item label="Address">{personalDetails.address}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
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
