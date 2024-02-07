import React from 'react';
import { Layout, Space } from 'antd';
import Link from 'next/link';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/">
        <img src="/path-to-your-logo.png" alt="Company Logo" style={{ maxHeight: '32px', cursor: 'pointer' }} />
      </Link>

      <Space size="large">
        <Login/>
        <SignUp />
      </Space>
    </Header>
  );
};

export default Navbar;
