import React from 'react';
import { Layout } from 'antd';
import Logout from '@/components/Navbar/Logout/Logout';

const { Header } = Layout;

const AdminLandingPage = () => {
  return (
    <>
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logout/>
    </Header>
    admin
    </>
  );
};

export default AdminLandingPage;