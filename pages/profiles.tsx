import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
//import Profile from "../components/Profile";
//import ProfileNoInput from "../components/ProfileNoInput";
import AllProfiles from "../components/AllProfiles";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fam WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Modal />

      <AllProfiles />


    </div>
  )
}

export default Home
