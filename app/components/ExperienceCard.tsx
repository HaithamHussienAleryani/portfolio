// @flow
import {motion} from 'framer-motion';
import * as React from 'react';
import Image from "next/image";

type Props = {};
export const ExperienceCard = (props: Props) => {
    return (
        <article
            className={'flex  flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'}>
            <motion.img
                initial={{
                    opacity: 0,
                    y: -100
                }}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                viewport={{once: true}}
                src={'/hero.png'}
                className={' flex-shrink-0 w-32 h-32 rounded-full object-cover  xl:w-[200px] xl:h-[200px]'}
            />
            <div className={'text-start'}>
                <h4 className={'text-xl  capitalize '}>CTO at</h4>
                <p className={'text-primary text-2xl font-bold'}>WaslAfaq</p>

                <p className={'text-sm my-4'}>Started 21-7-2021 till now </p>
                <div className={'grid grid-cols-5 my-3 gap-2'}>
                    <Image src="/github.svg" alt="" className={'w-8 h-8 bg-white rounded-full'}/>
                    <Image src="/html.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/tailwind.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/jquery.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/sql.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/javascript.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/c.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/npm.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/flutter.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/dart.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/sass.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image src="/typescript.svg" alt="" className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image src="/dotnet.svg" alt="" className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image src="/next.svg" alt="" className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image src="/react.svg" alt="" className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image src="/bootstrap.svg" alt="" className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                </div>
                <ul className={'list-disc text-md mt-10 ml-4 space-y-2 text-left'}>
                    <li>Head of IT department</li>
                    <li>Company Cloud Manager</li>
                    <li>Mobile Developer</li>
                    <li>Web Designer</li>
                </ul>
            </div>
        </article>
    );
};