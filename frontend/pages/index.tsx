import Head from "next/head";
import dynamic from 'next/dynamic';

// Dynamically import the Navbar component
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false });

const Home = () => {
  return (
    <div>
      <Head>
        <title>Onetera Technologies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <h1>Welcome to Onetera!</h1>
    </div>
  );
};

export default Home;
