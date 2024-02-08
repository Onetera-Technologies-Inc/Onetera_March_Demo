import SingleUserTable from "@/components/SingleUserTable/SingleUserTable";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SingleUserApplication = () => {
  const router = useRouter();
  const { userId } = router.query;

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
