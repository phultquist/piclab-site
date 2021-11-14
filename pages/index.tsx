import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AI from "../components/sections/AI";
import FeaturesNews from "../components/sections/FeaturesNews";
import Hero from "../components/sections/Hero";
import { NavBar, Badge, Logo, EmailForm } from "../components";
import { Client } from "../utils/prismicHelpers";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { PrismicImage, Reason, NewsPiece } from "../utils/types";

export async function getStaticProps() {
  const doc = await Client().getByUID('home', 'home', { lang: 'en-us' });

  return {
    props: {
      ...doc.data
    }
  }
};

interface HomeProps {
  tagline: RichTextBlock[];
  description: RichTextBlock[];
  badge: string;
  tags: { text: string }[];
  headline: RichTextBlock[];
  ai_description: RichTextBlock[];
  ai_summary: string;
  ai_image: PrismicImage;
  features_title: RichTextBlock[];
  reasons: Reason[];
  news_title: RichTextBlock[];
  news: NewsPiece[];
  get_started_title: RichTextBlock[];
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Head>
        <title>PicLab - Home</title>
      </Head>
      <main>
        <NavBar />
        <Hero tagline={props.tagline} description={props.description} badge={props.badge} />
        <AI
          headline={props.headline}
          tags={props.tags.map(tag => tag.text)}
          description={props.ai_description}
          summary={props.ai_summary}
          image={props.ai_image}
        />
        <FeaturesNews
          headline={props.features_title}
          cards={props.reasons}
          news={props.news}
          newsTitle={props.news_title}
        />
        <section className="flex h-screen"
          style={{
            background: `linear-gradient(296.35deg, rgba(0, 0, 0, 0.25) 11.34%, rgba(0, 0, 0, 0) 96.21%), url('/images/sample.png'), #0D0D0D;`,
            backgroundSize: 'cover',
            boxShadow: '0px 94px 114px rgba(0, 0, 0, 0.25);',
          }}>
          <div className="m-auto z-10 space-y-8 w-[30rem] max-w-screen-2xl">
            <p className="text-center text-white text-3xl"><RichText render={props.get_started_title} /></p>
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
