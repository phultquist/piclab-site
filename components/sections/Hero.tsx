import { FunctionComponent, useEffect, useState } from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';
import { RichTextBlock, RichText } from 'prismic-reactjs';
import Image from 'next/image';
import { Badge, Logo } from '../../components/';
import Laptop from '../../public/images/Laptop.png';

interface MotionItem {
    text: string;
    y?: number;
    x?: number;
    startX: number,
    startY: number,
    speed: number;
}

interface HeroProps {
    description: RichTextBlock[];
    tagline: RichTextBlock[];
    badge: string;
}

const AI: FunctionComponent<HeroProps> = props => {
    // const { scrollY } = useViewportScroll();
    // const initialTags = props.tags.map((tag, i) => ({
    //     text: tag,
    //     y: 0,
    //     x: 0,
    //     startX: Math.random() * 800,
    //     startY: (i * 50 + 100 + (Math.random() - 1) * 30),
    //     speed: Math.random() / 4 + 0.05,
    // }));
    // const [motionTags, setMotionTags] = useState<MotionItem[]>(initialTags);

    // useEffect(() => {
    //     setMotionTags(motionTags.map(tag => ({ ...tag, x: tag.startX + scrollY.get() * tag.speed, y: tag.startY })));
    // }, [scrollY, motionTags]);

    return (
        <section className="h-screen md:min-h-[40rem] flex flex-row relative">
            <div className="w-1/3 ml-20 pb-36 pt-10 h-full flex flex-col justify-between">
                <div className="py-10 w-40 h-20 relative">
                    <Logo colors='white' />
                </div>
                <div>
                    <Badge text={props.badge} />
                    <h1 className="text-3xl text-white my-4">
                        <RichText render={props.tagline} />
                    </h1>
                </div>
                <div className="border-l-2 border-white pl-10 pr-20 text-white">
                    <RichText render={props.description} />
                </div>
            </div>
            <div className="w-3/4 h-full overflow-hidden">
                <div
                    className="absolute rounded-full h-[calc(80rem-10vh)] w-[55rem] opacity-40 bg-[#4B73FF]"
                    style={{ filter: "blur(136px)", transform: "translate(-10%, 40%) rotate(29.75deg)" }}
                ></div>
                <div className="absolute bottom-0 right-0 w-2/3 h-full">
                    <Image
                        src={Laptop}
                        alt="PicLab"
                        layout="fill"
                        objectPosition="right bottom"
                        objectFit="contain"
                        className="absolute bottom-0"
                    />
                </div>
            </div>
        </section>
    )
};

export default AI;