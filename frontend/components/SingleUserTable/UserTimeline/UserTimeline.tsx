import React from "react";
import { Steps } from "antd";

const UserTimeline = () => {
  const steps = [
    {
      title: "Submitted",
      description: "Your application has been received.",
    },
    {
      title: "In Progress",
      description: "Your application is being reviewed.",
    },
    {
      title: "Waiting",
      description: "Waiting for additional documents.",
    },
    {
      title: "Approved",
      description: "Congratulations! Your application has been approved.",
    },
  ];
  return (
    <Steps
      current={1}
      percent={60}
      labelPlacement="vertical"
      direction="horizontal"
      items={steps.map((step) => ({
        title: step.title,
        description: step.description,
      }))}
    />
  );
};

export default UserTimeline;
