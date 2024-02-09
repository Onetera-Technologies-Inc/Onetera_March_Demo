import React from 'react';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';

const { Header } = Layout;
const Logout = dynamic(() => import("@/components/Navbar/Logout/Logout"), {
  ssr: false,
});

const ResidentLandingPage = () => {
  return (
    <>
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logout/>
    </Header>
    Hi Resident
    </>
  );
};

export default ResidentLandingPage;
