import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Activity from "../components/Activity";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fam WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>Messaging</h1>
    </div>
  )
}

export default Home
