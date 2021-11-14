import { FunctionComponent } from "react";
import { Card, CardBody, CardDescription, CardHeader, CardSummary } from '..';
import Image from 'next/image';
import Link from 'next/link';
import { RichTextBlock, RichText, Date } from "prismic-reactjs";
import { Reason, NewsPiece } from "../../utils/types";

interface FeaturesNewsProps {
    headline: RichTextBlock[];
    cards: Reason[],
    news: NewsPiece[],
    newsTitle: RichTextBlock[],
}

const FeaturesNews: FunctionComponent<FeaturesNewsProps> = props => {
    return (<section className="relative flex flex-col">
        {/* Content */}
        <div className="w-full z-40"
            style={{
                filter: "drop-shadow(0px 63px 104px rgba(0, 0, 0, 0.17));",
            }}
        >
            <div className="pt-20">
                <h2 className="text-white text-center text-3xl mx-auto px-4">
                    <RichText render={props.headline} />
                </h2>
                <div className="px-12 flex flex-row overflow-x-scroll space-x-3 mt-20 items-stretch pb-4">
                    {props.cards.map((card, index) => (
                        <div className={`flex-none h-full ${index === (props.cards.length - 1) ? "pr-12" : ""}`} key={card.header[0].text}>
                            <div className="max-w-screen-sm">
                                <Card>
                                    <CardBody>
                                        <CardSummary>{card.summary}</CardSummary>
                                        <CardHeader>
                                            <RichText render={card.header} />
                                        </CardHeader>
                                        <CardDescription><RichText render={card.body} />
                                        </CardDescription>
                                    </CardBody>
                                    <Image
                                        src={card.image.url as string}
                                        alt={card.image.alt as string}
                                        width={card.image.dimensions?.width}
                                        height={card.image.dimensions?.height}
                                        className="rounded-xl absolute bottom-0 align-bottom origin-bottom object-bottom"
                                    />
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap pt-20">
                <div className="w-full lg:w-1/2 px-8">
                    <div className="mx-auto max-w-screen-sm lg:max-w-md mb-40 mt-10">
                        <h2 className="text-white text-3xl mb-16">News lorem at PicLab</h2>
                        <div className="grid grid-cols-3 divide">
                            {props.news.map((news, index) => (
                                <>
                                    <div key={`${news.date}-${news.article_title}-date`}>
                                        <p className="text-white opacity-40 uppercase pr-8">{Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                                    </div>
                                    <div className="col-span-2" key={`${news.date}-${news.article_title}-title`}>
                                        <Link href="/" passHref><h4 className="cursor-pointer font-medium text-white underline text-lg"><RichText render={news.article_title} /></h4></Link>
                                    </div>
                                    {
                                        index !== props.news.length - 1 && (
                                            <hr className="col-span-3 my-10 border-t-2 border-white opacity-[0.12]" />
                                        )
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="w-full lg:w-1/2 lg:h-auto relative overflow-hidden"
                >
                    <div
                        className="w-full h-full absolute"
                        style={{ backgroundImage: 'url("/images/news-waves.svg")', backgroundPosition: 'top left;', backgroundSize: '150%' }}
                    >
                    </div>
                </div>
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
    </section>);
}

export default FeaturesNews;