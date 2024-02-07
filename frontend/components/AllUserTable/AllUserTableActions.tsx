import { MailOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const AllUserTableActions = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Space size="middle">
        <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
        <CheckCircleOutlined style={{ fontSize: '24px', color: 'green' }} />
        <CloseCircleOutlined style={{ fontSize: '24px', color: 'red' }} />
      </Space>
    </div>
  );
};

export default AllUserTableActions ;
