import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Activity from "../components/Activity";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fam WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Activity />
      {/* Activity */}


      {/* Pop-up */}
    </div>
  )
}

export default Home
