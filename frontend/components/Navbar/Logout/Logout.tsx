import { Button } from 'antd';
import Link from 'next/link';
import { LogoutOutlined } from '@ant-design/icons';

const Logout = () => {
  return (
    <Link href="/" passHref>
      <Button icon={<LogoutOutlined />} style={{ marginLeft: 'auto' }} type="primary">
        Logout
      </Button>
    </Link>
  );
};

export default Logout;
