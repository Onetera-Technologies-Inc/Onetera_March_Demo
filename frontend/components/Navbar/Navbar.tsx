import { Layout, Space } from 'antd';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const { Header } = Layout;
const Login = dynamic(() => import('../Navbar/Login/Login'), { ssr: false });
const SignUp = dynamic(() => import('../Navbar/SignUp/SignUp'), { ssr: false });


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
