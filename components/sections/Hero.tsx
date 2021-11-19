import { FunctionComponent, useEffect, useState } from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';
import { RichTextBlock, RichText } from 'prismic-reactjs';
import Image from 'next/image';
import { Badge, Logo, Tag } from '../../components/';
import Laptop from '../../public/images/Laptop.png';
import Person from '../../public/images/person.png';
import Pencils from '../../public/images/pencils.png';
import Desk from '../../public/images/desk.png';

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
    const { scrollY } = useViewportScroll();
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
        <section className="min-h-screen lg:h-screen lg:min-h-[40rem] grid grid-cols-3 relative">
            <div className="col-span-3 lg:col-span-1 ml-6 md:ml-20 pb-12 lg:pb-36 pt-10 h-full flex flex-col space-y-8 justify-between">
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
            <div className="absolute w-full h-full overflow-hidden">
                <div
                    className="absolute rounded-full h-[calc(80rem-10vh)] w-[55rem] opacity-40 bg-[#4B73FF]"
                    style={{ filter: "blur(136px)", transform: "translate(35%, 40%) rotate(29.75deg)" }}
                ></div>
            </div>
            <div className="col-span-3 lg:col-span-2 lg:h-full min-h-[30rem]">
                <div className="relative h-full">
                    <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden">
                        <div className="relative h-full lg:h-[120%] lg:w-[120%]">
                            {

                            }
                            <div className="block lg:hidden">
                                <Image
                                    src={Laptop}
                                    alt="PicLab Preview"
                                    layout="fill"
                                    objectPosition=""
                                    objectFit="contain"
                                    priority
                                    className="block lg:hidden"
                                />
                            </div>
                            <div className="hidden lg:block">
                                <Image
                                    src={Laptop}
                                    alt="PicLab Preview"
                                    layout="fill"
                                    objectPosition="right bottom"
                                    objectFit="contain"
                                    priority
                                    className="absolute bottom-0 hidden lg:block -translate-y-14"
                                />
                            </div>
                            <div className="absolute w-full h-[80%] translate-x-0 lg:translate-x-24 bottom-32 lg:bottom-0 scale-[0.25] sm:scale-50 md:scale-75 lg:scale-100" >
                                {/*  translate-x-24 translate-y-36 */}
                                <Tag text="Scene" className="absolute right-48 top-48 shadow-2xl" />
                                <Tag text="Water" className="absolute left-[28rem] top-96 shadow-2xl" />
                                <div className="absolute w-72 h-56 backdrop-filter drop-shadow-2xl left-48">
                                    <motion.div>
                                        <Image
                                            src={Person}
                                            alt="Person Image"
                                            layout="fill"
                                            priority
                                            objectPosition="right bottom"
                                            objectFit="contain"
                                            className="absolute bottom-0"
                                        />
                                    </motion.div>
                                    <Tag text="Person" className="absolute -left-4 top-16" />
                                </div>
                                <div className="absolute w-44 h-40 backdrop-filter drop-shadow-2xl left-0 top-80">
                                    <Image
                                        src={Desk}
                                        alt="Desk Image"
                                        layout="fill"
                                        priority
                                        objectPosition="right bottom"
                                        objectFit="contain"
                                        className="absolute bottom-0"
                                    />
                                    <Tag text="Desk" className="absolute -right-8 top-12" />
                                </div>
                                <div className="absolute w-56 h-40 backdrop-filter drop-shadow-2xl left-[26rem] top-28">
                                    <Image
                                        src={Pencils}
                                        alt="Pencils Image"
                                        layout="fill"
                                        objectPosition="right bottom"
                                        objectFit="contain"
                                        className="absolute bottom-0"
                                    />
                                    <Tag text="Pencils" className="translate-x-48 -translate-y-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AI;