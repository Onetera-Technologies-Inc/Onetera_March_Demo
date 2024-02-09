import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { WelcomeQueryParams } from '@/constants/types';
import dynamic from 'next/dynamic';

const ResidentLandingPage = dynamic(() => import('@/container/ResidentLandingPage/ResidentLandingPage'));
const AdminLandingPage = dynamic(() => import('@/container/AdminLandingPage/AdminLandingPage'));

const WelcomePage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as WelcomeQueryParams;

  return (
    <div>
      { username === 'admin' ? <><AdminLandingPage/></> : <><ResidentLandingPage/></>}
    </div>
  );
};

export default WelcomePage;
