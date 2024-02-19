import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  ssr: false,
});

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
