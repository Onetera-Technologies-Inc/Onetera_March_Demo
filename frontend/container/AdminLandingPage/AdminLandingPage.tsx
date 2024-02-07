import { Layout, Typography } from 'antd';
import Logout from '@/components/Navbar/Logout/Logout';
import AllUserTable from '@/components/AllUserTable/AllUserTable';

const { Header } = Layout;

const AdminLandingPage = () => {
  return (
    <>
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logout/>
    </Header>
    <Typography.Title  level={3} style={{ margin: 0 }}>
        List of All Users
      </Typography.Title>
      <section style={{marginTop:"20px"}}><AllUserTable/></section>
    </>
  );
};

export default AdminLandingPage;