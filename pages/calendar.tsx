import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Activity from "../components/Activity";
import Modal from "../components/Modal";
import StyledCalendar from '../components/StyledCalendar';
import CalendarPage from '../components/CalendarPage';


const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fam WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Modal />

      <CalendarPage />
    </div>
  )
}

export default Home
