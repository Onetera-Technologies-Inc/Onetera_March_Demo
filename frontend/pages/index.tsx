import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Onetera Techbologies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <h1>Welcome to Onetera!</h1>
    </div>
  );
};

export default Home;
