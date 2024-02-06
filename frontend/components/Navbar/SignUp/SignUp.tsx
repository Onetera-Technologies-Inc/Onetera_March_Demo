import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { UserAddOutlined } from '@ant-design/icons';

const SignUp = () => {
  return (
    <Link href="/signup" passHref>
      <Button icon={<UserAddOutlined />} type="primary" style={{ marginLeft: '10px' }}>
        Sign Up
      </Button>
    </Link>
  );
};

export default SignUp;
