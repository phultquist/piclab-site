import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AI from "../components/sections/AI";
import {
  NavBar,
  Badge,
  Card,
  Logo,
  CardHeader,
  CardSummary,
  CardBody,
  CardDescription,
  CardImage,
  EmailForm
} from "../components";

import Laptop from '../public/images/Laptop.png';

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
    date: "Jul 18, 2021",
    title: "PicLab generates $1 billion in revenue.",
  },
  {
    date: "Jul 23, 2021",
    title: "PicLab generates an additional $2 billion in revenue.",
  },
];

const Home: NextPage = () => {
  const [card, setSelectedCard] = useState(0);
  return (
    <>
      <Head>
        <title>PicLab - Home</title>
      </Head>
      <main>
        <NavBar />
        <section className="h-screen flex flex-row relative">
          <div className="w-1/4 ml-10 pb-28 pt-10 h-full flex flex-col justify-between">
            <div className="py-10 w-40 h-20 relative">
              <Logo colors='white' />
            </div>
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
              className="absolute rounded-full h-[calc(80rem-10vh)] w-[55rem] opacity-40 bg-[#4B73FF]"
              style={{ filter: "blur(136px)", transform: "translate(-10%, 40%) rotate(29.75deg)" }}
            ></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-full">
              {/* <img src="/Laptop.png" alt="Piclab" className="" /> */}
              <Image
                src={Laptop}
                alt="PicLab"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="absolute bottom-0 hero-laptop"
              />
            </div>
          </div>
        </section>
        <AI />
        <section className="relative flex flex-col">
          {/* Content */}
          <div className="w-full z-40"
            style={{
              filter: "drop-shadow(0px 63px 104px rgba(0, 0, 0, 0.17));",
            }}
          >
            <div className="pt-20">
              <h2 className="text-white text-center text-3xl mx-auto">
                Why PicLab is the perfect <br />
                lorem ipsum for you.
              </h2>
              <div className="px-12 flex flex-row overflow-x-scroll space-x-3 mt-20 items-stretch">
                {datapoints.map((datapoint, index) => (
                  <div className="flex-none max-w-screen-sm h-full" key={datapoint.title + datapoint.summary + index}>
                    <Card>
                      <CardBody>
                        <CardSummary>{datapoint.summary}</CardSummary>
                        <CardHeader>
                          <p>{datapoint.title}</p>
                        </CardHeader>
                        <CardDescription>{datapoint.description}</CardDescription>
                      </CardBody>
                      <CardImage src="/Showoff.png" />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap pt-20">
              <div className="w-full lg:w-1/2 px-8">
                <div className="mx-auto max-w-screen-sm lg:max-w-md mb-40 mt-10">
                  <h2 className="text-white text-3xl mb-16">News lorem at PicLab</h2>
                  <div className="grid grid-cols-3 divide">
                    {news.map((item, index) => (
                      <>
                        <div key={`${item.date}-${item.title}-date`}>
                          <p className="text-white opacity-40 uppercase pr-8">{item.date}</p>
                        </div>
                        <div className="col-span-2" key={`${item.date}-${item.title}-title`}>
                          <Link href="/" passHref><h4 className="cursor-pointer font-medium text-white underline text-lg">{item.title}</h4></Link>
                        </div>
                        {
                          index !== news.length - 1 && (
                            <hr className="col-span-3 my-10 border-t-2 border-white opacity-[0.12]" />
                          )
                        }
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="w-full h-40 lg:w-1/2 lg:h-auto relative overflow-hidden"
              >
                <div
                  className="w-full h-full absolute"
                  style={{ backgroundImage: 'url("/images/news-waves.svg")', backgroundPosition: 'top left;', backgroundSize: '150%' }}
                >
                </div>
              </div>
              {/* <div className="w-full"></div> */}
            </div>
          </div>
          {/* Backgrounds */}
          <div className="absolute z-0 flex-auto w-full h-full flex flex-col"
            style={{ filter: 'drop-shadow(0px 84px 84px rgba(0, 0, 0, 0.75));' }}
          >
            <div className="h-[50rem]"></div>
            <div
              className="w-screen bg-gray-800 h-80 flex-grow"
              style={{ backgroundImage: 'url("/images/news-glow.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}
            ></div>
          </div>
        </section>
        <section className="flex h-screen"
          style={{
            background: `linear-gradient(296.35deg, rgba(0, 0, 0, 0.25) 11.34%, rgba(0, 0, 0, 0) 96.21%), url('/images/sample.png'), #0D0D0D;`,
            backgroundSize: 'cover',
            boxShadow: '0px 94px 114px rgba(0, 0, 0, 0.25);',
          }}>
          <div className="m-auto z-10 space-y-8 w-[30rem] max-w-screen-2xl">
            <p className="text-center text-white text-3xl">Let’s get started lorem <br /> ipsum with PicLab</p>
            <EmailForm />
          </div>
          <div className="absolute w-full h-full backdrop-filter backdrop-blur-xs">
            <div className="w-full h-full bg-black opacity-50"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
