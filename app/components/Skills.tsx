"use client";

import {motion} from 'framer-motion';
import * as React from 'react';
import {Skill} from "@/app/components/Skill";

type Props = {};
export const Skills = (props: Props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2}}
            className={'h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-[2000px] min-h-screen md:px-10 justify-evenly items-center mx-auto'}>
            <h3 className={'text-2xl tracking-[20px] uppercase text-gray-500 absolute top-24'}>skills</h3>
            <h3 className={'text-sm tracking-[3px] uppercase text-gray-500 absolute top-36'}>hover over a skill to
                show proficiency</h3>
            <div className={'grid grid-cols-3 md:grid-cols-4 gap-5 mt-40 md:gap-10'}>
                <Skill image={'github'} percentage={80} directionLeft={true}/>
                <Skill image={'dotnet'} percentage={80}/>
                <Skill image={'c'} percentage={90} directionLeft={true}/>
                <Skill image={'sql'} percentage={90}/>
                <Skill image={'html'} percentage={100} directionLeft={true}/>
                <Skill image={'css'} percentage={100}/>
                <Skill image={'sass'} percentage={100} directionLeft={true}/>
                <Skill image={'tailwind'} percentage={90}/>
                <Skill image={'bootstrap'} percentage={100} directionLeft={true}/>
                <Skill image={'jquery'} percentage={80}/>
                <Skill image={'javascript'} percentage={95} directionLeft={true}/>
                <Skill image={'react'} percentage={90}/>
                <Skill image={'next'} percentage={90} directionLeft={true}/>
                <Skill image={'npm'} percentage={100}/>
                <Skill image={'flutter'} percentage={100} directionLeft={true}/>
                <Skill image={'dart'} percentage={100}/>

            </div>
        </motion.div>
    );
};