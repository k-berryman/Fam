import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Activity from "../components/Activity";
import Modal from "../components/Modal";
import Chat from "../components/Chat";
import ChatActivity from "../components/ChatActivity";


const Home: NextPage = () => {
  return (
    <div>
      <h1>testing</h1>
      <ChatActivity />
    </div>
  )
}

export default Home
