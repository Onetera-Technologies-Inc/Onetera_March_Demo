import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import CustomizedServices from "@/components/UserInteractions/CustomizedServices/CustomizedServices";

const { Header } = Layout;
const Logout = dynamic(() => import("@/components/Navbar/Logout/Logout"), {
  ssr: false,
});
const UserInteractions = dynamic(
  () => import("@/components/UserInteractions/UserInteractions"),
  {
    ssr: false,
  }
);

const ResidentLandingPage = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logout />
      </Header>
      <section>
        <UserInteractions />
      </section>
      <section>
        <CustomizedServices />
      </section>
    </>
  );
};

export default ResidentLandingPage;
