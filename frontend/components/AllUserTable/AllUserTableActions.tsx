import { MailOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Col, Row, Space } from 'antd';

const AllUserTableActions = () => {
  return (
    <Row gutter={50}>
    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
    <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
    </Col>
    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
    <CheckCircleOutlined style={{ fontSize: '24px', color: 'green' }} />
    </Col>
    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
    <CloseCircleOutlined style={{ fontSize: '24px', color: 'red' }} />
    </Col>
  </Row>
  );
};

export default AllUserTableActions ;
