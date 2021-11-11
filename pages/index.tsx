import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Tag, NavBar, Badge } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PicLab - THETAGLINE</title>
      </Head>
      <div className="bg-gradient-to-br from-gradient-home-start to-gradient-home-end">
        <NavBar />
        <div className="p-2 h-screen">
          <div className="w-1/3 ml-10 pb-28 pt-10 h-full flex flex-col justify-between">
            <p className="">Piclab</p>
            <div>
              <Badge text="Coming Summer 2021" />
              <h1 className="text-3xl text-white my-4">
                Powerful image asset management for everyone
              </h1>
            </div>
            <div className="border-l-2 border-white px-10 text-white">
              Organize, transform, & serve your entire photo library. The
              perfect image management app for freelancers, organizations, & web
              developers.
            </div>
          </div>
        </div>
        <div className="h-screen bg-gray-800">
          <div
            className="h-full w-full absolute
            bg-gradient-to-tr from-gradient-ai-start to-gradient-ai-end opacity-60"
          ></div>
          <div className="relative p-2">
            <Tag text="Person" />
            <Tag text="Desk" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
