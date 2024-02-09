import React from "react";
import { Card, Col, Row } from "antd";

const services = [
  {
    title: "Prompt1",
    description: "Description for Prompt1 service.",
  },
  {
    title: "Message1",
    description: "Description for Message1 service.",
  },
  {
    title: "Service3",
    description: "Description for another service.",
  },
];

const CustomizedServices = () => (
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Row gutter={16}>
      {services.map((service, index) => (
        <Col span={8} key={index}>
          <Card title={service.title} bordered={false}>
            {service.description}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default CustomizedServices;
