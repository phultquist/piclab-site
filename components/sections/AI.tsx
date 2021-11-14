import { FunctionComponent, useRef } from 'react';
import { Tag, Card, CardBody, CardDescription, CardHeader, CardSummary } from '../';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';
const AI: FunctionComponent = () => {
    return (<section className="relative bg-gray-800 z-20 overflow-hidden">

        <div
            className="h-full w-full absolute opacity-100"
            style={{ backgroundImage: 'url("/images/news-glow.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}
        ></div>

        <img src="/images/waves.png" alt="" className="absolute object-contain w-[90rem] rotate-[135deg] z-0 translate-y-60 -translate-x-60" />
        <div className="relative p-2 h-full flex flex-row justify-between">
            <div className="">
                <Tag text="Person" />
                <Tag text="Desk" />
                <Tag text="Pencils" />
                <Tag text="Scenery" />
                <Tag text="Book" />
            </div>
            <div className="w-1/3 pr-10 py-10">
                <Card>
                    <CardBody>
                        <CardSummary>Artificial Intelligence</CardSummary>
                        <CardHeader>Let A.I. handle lorem ipsum dolor sit.</CardHeader>
                        <div className="py-10">
                            <img src="/Showoff.png" objectFit="cover" alt="AI Image" />
                        </div>
                        <CardDescription>No more need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</CardDescription>
                    </CardBody>
                </Card>
            </div>
        </div>
    </section>)
};

export default AI;