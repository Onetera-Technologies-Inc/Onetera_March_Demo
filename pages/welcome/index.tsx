import { useRouter } from "next/router";
import { NextPage } from "next";
import ResidentLandingPage from "@/container/ResidentLandingPage/ResidentLandingPage";
import AdminLandingPage from "@/container/AdminLandingPage/AdminLandingPage";

interface WelcomeQueryParams {
  username?: string;
}

const WelcomePage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as WelcomeQueryParams;

  return (
    <div>
      hey
      {/* { username === 'admin' ? <><AdminLandingPage/></> : <><ResidentLandingPage/></>} */}
    </div>
  );
};

export default WelcomePage;
