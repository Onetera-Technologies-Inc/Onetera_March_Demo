import { Col, Row } from "antd";
import SubmittedApplication from "./SubmittedApplication";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import CustomizedMessagePrompts from "./CustomizedMessagePrompts";

const SingleUserApplicationDetails = () => {
  return (
    <Row gutter={50}>
      <Col xs={24} sm={12} md={16} lg={12} xl={10}>
        <SubmittedApplication />
      </Col>
      <Col xs={24} sm={12} md={8} lg={12} xl={14}>
        <Row>
          <Col xs={24} sm={14} md={14} lg={15} xl={16}>
            Our records indicate Julie speaks <b>Spanish</b>. Do you want to send the
            message in <b>Spanish</b> instead?
          </Col>
          <Col xs={12} sm={5} md={5} lg={4} xl={4}>
            <CheckCircleOutlined style={{ fontSize: "24px", color: "green" }} />
          </Col>
          <Col xs={12} sm={5} md={5} lg={5} xl={4}>
            <CloseCircleOutlined style={{ fontSize: "24px", color: "red" }} />
          </Col>
        </Row>
        <section style={{marginTop:"30px"}}><CustomizedMessagePrompts/></section>
      </Col>
    </Row>
  );
};

export default SingleUserApplicationDetails;
