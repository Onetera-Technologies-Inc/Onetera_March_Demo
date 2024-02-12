import { Layout, Typography } from "antd";
import dynamic from "next/dynamic";

const AdminServicesPage = dynamic(
  () => import("@/components/AdminServices/AdminServices"),
  {
    ssr: false,
  }
);

const AdminLandingPage = () => {
  return (
    <>
      <AdminServicesPage />
    </>
  );
};

export default AdminLandingPage;
