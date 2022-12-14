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
const Home: NextPage = () => {
  return (
    <>
      <div className="bg-custom-100 dark:bg-background-950 flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Marco Polo</title>
        </Head>
        <div className="w-full bg-custom-200 dark:bg-background-800 h-6" />
        <Header />
        <main className=" flex w-full max-w-7xl grid grid-cols-[.3fr_.7fr] flex-1 flex-col items-start justify-center  text-center">
          <Sidebar />
          <div>
            <div className="flex items-center justify-start pl-4 align-start">
              <Search />
              <Filter />
            </div>

            <Feed />
          </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
      </div>
      <Toaster />
    </>
  );
};

export default Home;
