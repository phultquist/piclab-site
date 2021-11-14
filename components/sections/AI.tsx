import { FunctionComponent, useEffect, useState } from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';
import { RichTextBlock, RichText } from 'prismic-reactjs';
import Image from 'next/image';

import { PrismicImage } from '../../utils/types';
import { Tag, Card, CardBody, CardDescription, CardHeader, CardSummary } from '../';

interface MotionTag {
    text: string;
    y?: number;
    x?: number;
    startX: number,
    startY: number,
    speed: number;
}

interface AIProps {
    tags: string[];
    image: PrismicImage;
    description: RichTextBlock[];
    headline: RichTextBlock[];
    summary: string;
}

const AI: FunctionComponent<AIProps> = props => {
    const { scrollY } = useViewportScroll();
    const waveY = useTransform(scrollY, [0, 1000], [300, 200], { clamp: false });
    const initialTags = props.tags.map((tag, i) => ({
        text: tag,
        y: 0,
        x: 0,
        startX: Math.random() * 800,
        startY: (i * 50 + 100 + (Math.random() - 1) * 30),
        speed: Math.random() / 4 + 0.05,
    }));
    const [motionTags, setMotionTags] = useState<MotionTag[]>(initialTags);

    useEffect(() => {
        setMotionTags(motionTags.map(tag => ({ ...tag, x: tag.startX + scrollY.get() * tag.speed, y: tag.startY })));
    }, [scrollY, motionTags]);

    return (<section className="relative bg-gray-800 z-20 overflow-hidden">
        <div
            className="h-full w-full absolute opacity-100"
            style={{ backgroundImage: 'url("/images/news-glow.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}
        ></div>

        <motion.img
            style={{ y: waveY, x: -300, rotate: '135deg' }}
            src="/images/waves.png"
            alt=""
            className="absolute object-contain w-[90rem] z-0"
        />
        <div className="relative p-2 h-full w-full flex flex-row justify-between py-20">
            <div className="relative z-0">
                {motionTags.map(tag => (
                    <motion.div
                        key={tag.text}
                        className=""
                        style={{ y: tag.y, x: tag.x }}
                    >
                        <Tag text={tag.text} />
                    </motion.div>
                ))}
            </div>
            <div className="w-full md:w-2/3 lg:w-2/5 xl:w-1/3 pr-20 py-10 z-10 relative">
                <Card>
                    <CardBody>
                        <CardSummary>{props.summary}</CardSummary>
                        <CardHeader><RichText render={props.headline} /></CardHeader>
                        <div className="py-20 w-full flex flex-row justify-center">
                            <Image
                                src={props.image.url as string}
                                alt={props.image.alt as string}
                                width={props.image.dimensions?.width}
                                height={props.image.dimensions?.height}
                                className="rounded-xl"
                            />
                        </div>
                        <CardDescription><RichText render={props.description} /></CardDescription>
                    </CardBody>
                </Card>
            </div>
        </div>
    </section>)
};

export default AI;