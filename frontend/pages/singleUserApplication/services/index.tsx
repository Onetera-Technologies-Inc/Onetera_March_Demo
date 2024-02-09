import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { serviceKey, userId } = router.query;
  const UserTimeline = dynamic(() => import('@/components/SingleUserTable/UserTimeline/UserTimeline'), { ssr: false });
  const SingleUserApplicationDetails = dynamic(() => import('@/components/SingleUserTable/SingleUserApplicationDetails.tsx/SingleUserApplicationDetails'), { ssr: false });

  useEffect(() => {
    console.log(serviceKey, userId)
  }, []);

  return (
    <>
      <UserTimeline/>
      <SingleUserApplicationDetails/>
    </>
  );
};

export default ServiceDetailsPage;
