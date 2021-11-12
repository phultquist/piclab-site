import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Tag,
  NavBar,
  Badge,
  Card,
  CardHeader,
  CardSummary,
  CardBody,
  CardDescription,
  CardImage,
} from "../components";
import Laptop from "../public/Laptop.png";

const datapoints = [
  {
    summary: "All-in-one",
    title: "Lorem all of your file management on PicLab ipsum.",
    description:
      "No more need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    summary: "Organization",
    title: "Lorem ipsum organization dor sit epsilon.",
    description:
      "Easily organize all of lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    summary: "All-in-one",
    title: "Lorem all of your file management on PicLab ipsum.",
    description:
      "No more need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    summary: "All-in-one",
    title: "Lorem all of your file management on PicLab ipsum.",
    description:
      "No more need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const news = [
  {
    date: "July 18, 2021",
    title: "PicLab generates $1 billion in revenue.",
  },
  {
    date: "JUL 23, 2021",
    title: "PicLab generates an additional $2 billion in revenue.",
  },
];

const Home: NextPage = () => {
  const [card, setSelectedCard] = useState(0);
  return (
    <>
      <Head>
        <meta name="theme-color" content="black" />
        <title>PicLab - THETAGLINE</title>
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
          media="print"
          onLoad="this.media='all'"
        />
      </Head>
      <div className="">
        <NavBar />
        <div className="h-screen flex flex-row relative">
          <div className="w-1/4 ml-10 pb-28 pt-10 h-full flex flex-col justify-between">
            <p className="py-10">Piclab</p>
            <div>
              <Badge text="Coming Summer 2021" />
              <h1 className="text-3xl text-white my-4">
                Powerful image asset management for everyone
              </h1>
            </div>
            <div className="border-l-2 border-white pl-10 pr-20 text-white">
              Organize, transform, & serve your entire photo library. The
              perfect image management app for freelancers, organizations, & web
              developers.
            </div>
          </div>
          <div className="w-3/4 h-full overflow-hidden">
            <div
              className="absolute rounded-full h-[1300px] w-[500px] opacity-60 bg-[#4B73FF] -bottom-full"
              style={{ filter: "blur(68px)", transform: "rotate(19.75deg)" }}
            ></div>
            <div className="absolute bottom-0 right-0">
              <img src="/Laptop.png" alt="Piclab" className="" />
              {/* <Image
                src={Laptop}
                alt="PicLab"
                className="absolute bottom-0 hero-laptop"
              /> */}
            </div>
          </div>
        </div>
        <div className="relative h-screen bg-gray-800 z-20">
          <div
            className="h-full w-full absolute
            bg-gradient-to-tr from-gradient-ai-start to-gradient-ai-end opacity-60"
          ></div>
          <div className="relative p-2">
            <Tag text="Person" />
            <Tag text="Desk" />
          </div>
        </div>
        <div className="h-screen">
          <div
            className="h-full w-full absolute py-20"
            style={{
              filter: "drop-shadow(0px 63px 104px rgba(0, 0, 0, 0.17));",
            }}
          >
            <h2 className="text-white text-center text-3xl mx-auto">
              Why PicLab is the perfect <br />
              lorem ipsum for you.
            </h2>
            <div className="px-12 flex flex-row overflow-x-scroll space-x-3 z-40 relative mt-20 items-stretch">
              {datapoints.map((datapoint, index) => (
                <div className="flex-none max-w-screen-sm h-full">
                  <Card key={datapoint.title}>
                    <CardBody>
                      <CardSummary>{datapoint.summary}</CardSummary>
                      <CardHeader>
                        <p>{datapoint.title}</p>
                      </CardHeader>
                      <CardDescription>{datapoint.description}</CardDescription>
                    </CardBody>
                    <CardImage src="/Laptop.png" />
                  </Card>
                </div>
              ))}
            </div>
            <h2 className="text-white text-3xl">News lorem at PicLab</h2>
            {news.map((item, index) => (
              <div className="relative">{item.date}</div>
            ))}
          </div>
        </div>
        <div className="h-screen bg-purple-900"></div>
      </div>
    </>
  );
};

export default Home;
