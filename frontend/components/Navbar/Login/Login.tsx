import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { LoginOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <Link href="/login" passHref>
      <Button icon={<LoginOutlined />} type="primary">
        Login
      </Button>
    </Link>
  );
};

export default Login;
