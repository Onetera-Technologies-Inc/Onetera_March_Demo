import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { useRouter } from 'next/router';
import { DataType, ServiceType } from '@/constants/types';
import { allUserData } from '@/constants/tableData';

const SubmittedApplication = () => {
  const router = useRouter();
  const { userId, serviceKey } = router.query;
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

  if (!personalDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '24px', background: '#f0f2f5', borderRadius: '8px', border: '1px solid #d9d9d9' }}>
      <Descriptions
        title="Permit Application Details"
        layout="vertical"
        bordered
        column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
        size="small"
      >
        <Descriptions.Item label="First Name">{personalDetails.firstname}</Descriptions.Item>
        <Descriptions.Item label="Last Name">{personalDetails.lastname}</Descriptions.Item>
        <Descriptions.Item label="Address">{personalDetails.address}</Descriptions.Item>
        <Descriptions.Item label="Service Name">{personalDetails.service.serviceName}</Descriptions.Item>
        <Descriptions.Item label="Date of Submission">{personalDetails.date}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default SubmittedApplication;
