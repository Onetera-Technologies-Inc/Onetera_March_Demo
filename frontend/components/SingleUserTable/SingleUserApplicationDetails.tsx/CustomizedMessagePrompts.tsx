import { Alert, Col, Row } from "antd";
import SubmittedApplication from "./SubmittedApplication";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const CustomizedMessagePrompts = () => {
  return (
    <Row gutter={50}>
    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
    <Alert
      description="Info Description Info Description Info Description Info Description 1"
      type="info"
    />
    </Col>
    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
    <Alert
      description="Info Description Info Description Info Description Info Description 2"
      type="info"
    />
    </Col>
    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
    <Alert
      description="Info Description Info Description Info Description Info Description 3"
      type="info"
    />
    </Col>
  </Row>
  
  );
};

export default CustomizedMessagePrompts;
