import React from 'react';
import { Descriptions } from 'antd';

// Example permit application data
const userData = {
  firstName: 'John',
  lastName: 'Doe',
  address: '123 Main St, Anytown, AS 12345',
  serviceName: 'Building Permit',
  dateOfSubmission: '2021-09-01',
  telephone: '123-456-7890',
  status: 'Pending',
  remark: 'Urgent processing requested'
};

const SubmittedApplication = () => (
  <div style={{ padding: '24px', background: '#f0f2f5', borderRadius: '8px', border: '1px solid #d9d9d9' }}>
    <Descriptions
      title="Permit Application Details"
      layout="vertical"
      bordered // Adds a border around the descriptions
      column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }} // Adjusts the number of columns based on the screen size
      size="small" // Adjusts the size for a more compact look
    >
      <Descriptions.Item label="First Name">{userData.firstName}</Descriptions.Item>
      <Descriptions.Item label="Last Name">{userData.lastName}</Descriptions.Item>
      <Descriptions.Item label="Telephone">{userData.telephone}</Descriptions.Item>
      <Descriptions.Item label="Address">{userData.address}</Descriptions.Item>
      <Descriptions.Item label="Service Name">{userData.serviceName}</Descriptions.Item>
      <Descriptions.Item label="Date of Submission">{userData.dateOfSubmission}</Descriptions.Item>
      <Descriptions.Item label="Status">{userData.status}</Descriptions.Item>
      <Descriptions.Item label="Remark">{userData.remark}</Descriptions.Item>
      {/* Add more items as necessary */}
    </Descriptions>
  </div>
);

export default SubmittedApplication;
