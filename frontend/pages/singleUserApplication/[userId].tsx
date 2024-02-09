import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SingleUserApplication = () => {
  const router = useRouter();
  const { userId } = router.query;
  const SingleUserTable = dynamic(() => import('@/components/SingleUserTable/SingleUserTable'), { ssr: false });

  useEffect(()=>{
    console.log(userId)
  })
  
  return (
    <div>
      <h1>User Services</h1>
      <SingleUserTable userId={userId as string}/>
    </div>
  );
};

export default SingleUserApplication;
