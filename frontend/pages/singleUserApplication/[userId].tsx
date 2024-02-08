import SingleUserTable from "@/components/SingleUserTable/SingleUserTable";
import { useRouter } from "next/router";

const SingleUserApplication = () => {
  const router = useRouter();
  const { userId } = router.query;
  
  return (
    <div>
      <h1>User Services</h1>
      <SingleUserTable userId={userId}/>
    </div>
  );
};

export default SingleUserApplication;
