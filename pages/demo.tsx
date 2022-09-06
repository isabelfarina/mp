import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import Feed from "../components/main/Feed";
import Search from "../components/main/Search";
import Filter from "../components/main/Filter";
import { Toaster } from "react-hot-toast";
import { Popups } from "../components/main/Popups";
const Home: NextPage = () => {
  return (
    <>
      <div className="bg-custom-100 dark:bg-background-950 flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Marco Polo</title>
        </Head>
        <Popups />
      </div>
      <Toaster />
    </>
  );
};

export default Home;
