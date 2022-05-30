import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Activity from "../components/Activity";
import Modal from "../components/Modal";
import Chat from "../components/Chat";


const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Chat />
    </div>
  )
}

export default Home
