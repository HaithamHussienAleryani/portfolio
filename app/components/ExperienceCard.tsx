// @flow
import {motion} from 'framer-motion';
import * as React from 'react';
import Image from "next/image";

type Props = {};
export const ExperienceCard = (props: Props) => {
    return (
        <article
            className={'flex flex-col rounded-lg items-center space-y-7 mt-10 flex-shrink-0 w-[290px]  md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 lg:opacity-40 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200'}>
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
                    <Image width={10} height={10} src="/github.svg" alt="" className={'w-8 h-8 bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/html.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/tailwind.svg" alt=""
                           className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/jquery.svg" alt=""
                           className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/sql.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/javascript.svg" alt=""
                           className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/c.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/npm.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/flutter.svg" alt=""
                           className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/dart.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/sass.svg" alt="" className={'w-8 h-8  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/typescript.svg" alt=""
                           className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/dotnet.svg" alt=""
                           className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/next.svg" alt=""
                           className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/react.svg" alt=""
                           className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
                    <Image width={10} height={10} src="/bootstrap.svg" alt=""
                           className={'w-8 h-8 grayscale  bg-white rounded-full'}/>
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