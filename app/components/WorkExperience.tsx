'use client';
import {motion} from 'framer-motion';
import * as React from 'react';
import {ExperienceCard} from "@/app/components/ExperienceCard";


export const WorkExperience = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2}}
            className={'h-screen flex  flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'}>
            <h3 className={'text-2xl tracking-[20px] uppercase text-gray-500 absolute top-24'}>experience</h3>

            <div
                className={'w-full mt-20 flex space-x-5 overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary p-10 snap-x snap-mandatory'}>
                <ExperienceCard/>

            </div>

        </motion.div>
    );
};