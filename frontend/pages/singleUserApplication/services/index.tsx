import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import UserTimeline from '@/components/SingleUserTable/UserTimeline/UserTimeline';
import SingleUserApplicationDetails from '@/components/SingleUserTable/SingleUserApplicationDetails.tsx/SingleUserApplicationDetails';

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { serviceKey, userId } = router.query;

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
