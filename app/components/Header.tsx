'use client';

import {motion} from 'framer-motion';
import React from 'react';
import {SocialIcon} from "react-social-icons";

const Header = () => {
    return (
        <header className={' sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5'}>
            <motion.div
                initial={{x: -500, opacity: 0, scale: .5,}}
                animate={{x: 0, opacity: 1, scale: 1,}}
                transition={{
                    duration: 1.5,
                    type: 'just',
                }}
            >
                <SocialIcon className={'!h-[2.6rem]'} url="https://twitter.com" fgColor={'gray'}
                            bgColor={'transparent'}/>
                <SocialIcon className={'!h-[2.6rem]'} url="https://x.com" fgColor={'gray'} bgColor={'transparent'}/>
                <SocialIcon className={'!h-[2.6rem]'} url="https://github.com" fgColor={'gray'}
                            bgColor={'transparent'}/>
                <SocialIcon className={'!h-[2.6rem]'} url="https://facebook.com" fgColor={'gray'}
                            bgColor={'transparent'}/>
                <SocialIcon className={'!h-[2.6rem]'} url="https://instagram.com" fgColor={'gray'}
                            bgColor={'transparent'}/>
            </motion.div>
            <motion.div initial={{x: 500, opacity: 0, scale: .5,}}
                        animate={{x: 0, opacity: 1, scale: 1,}}
                        transition={{
                            duration: 1.5,
                            type: 'just',
                        }} className={'flex flex-row  items-center text-gray-300 uppercase cursor-pointer'}>
                <SocialIcon className={'!h-[3rem]'} network={'email'} fgColor={'gray'} bgColor={'transparent'}/>
                <p className={'text-gray-400 text-sm hidden md:inline-flex'}>get in touch</p>
            </motion.div>
        </header>
    );
};

export default Header;
