import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface WelcomeQueryParams {
  username?: string;
}

const WelcomePage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as WelcomeQueryParams;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hi {username || 'User'}!</h1>
    </div>
  );
};

export default WelcomePage;
