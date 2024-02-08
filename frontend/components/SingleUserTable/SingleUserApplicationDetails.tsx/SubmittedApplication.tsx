import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { useRouter } from 'next/router';

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
  {
    userId: "user2",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    firstname: "Laura",
    lastname: "Smith",
    address: "1234 Maple Street, Springville, IL 62704",
    service: { serviceName: "Permits", key: "service3" },
    date: "25 January 2024",
    key: "user2-service3",
  },
  {
    userId: "user3",
    profile: "https://randomuser.me/api/portraits/men/34.jpg",
    firstname: "Brian",
    lastname: "Johnson",
    address: "7896 Oak Street, Riverside, CA 92501",
    service: { serviceName: "Archived Applications", key: "service4" },
    date: "18 January 2024",
    key: "user3-service4",
  },
  {
    userId: "user4",
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
    firstname: "Emily",
    lastname: "Rodriguez",
    address: "4567 Pine Street, Boulder, CO 80301",
    service: { serviceName: "All Applications", key: "service5" },
    date: "20 January 2024",
    key: "user4-service5",
  },
  {
    userId: "user5",
    profile: "https://randomuser.me/api/portraits/men/56.jpg",
    firstname: "Alex",
    lastname: "Green",
    address: "9123 Elm Street, Newtown, PA 18940",
    service: { serviceName: "Affordable Housing", key: "service6" },
    date: "29 January 2024",
    key: "user5-service6",
  },
];

const SubmittedApplication = () => {
  const router = useRouter();
  const { userId, serviceKey } = router.query;
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

  if (!personalDetails) {
    return <p>Loading...</p>; // Or any loading indicator
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
        {/* Add more items as necessary */}
      </Descriptions>
    </div>
  );
};

export default SubmittedApplication;
