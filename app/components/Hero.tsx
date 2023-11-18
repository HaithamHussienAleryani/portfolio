'use client';
import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "@/app/components/BackgroundCircles";
import Link from "next/link";


const Hero = () => {
    const [text, count] = useTypewriter({
        words: ["{ Hi , I AM Haitham Hussein }", "loveMobileDevelopment.dart", "<CreativeWebdesigner/>"],
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 3000,
        loop: true,
    });

    return (
        <div

            className={'text-gray-200 mx-auto p-5 h-screen flex flex-col items-center justify-center space-y-8  text-center overflow-hidden  '}>
            <BackgroundCircles/>
            <img src={'/hero.png'} className={'rounded-full object-cover h-32 w-32 relative'}
                 alt={'My profile image'}/>


            <h2 className={"pb-2 text-sm md:text-lg text-gray-500 tracking-[15px]  uppercase"}>Software
                Engineer</h2>
            <span className={'text-3xl font-semibold lg:text-6xl px-10 '}>{text} <Cursor cursorColor={'#f1aa00'}
                                                                                         cursorStyle={'|'}
            ></Cursor></span>

            <div className={'z-20 '}>
                <Link href="#about">
                    <button className={'heroButton'}>About</button>
                </Link>
                <Link href="#experiences">
                    <button className={'heroButton'}>experiences</button>
                </Link>
                <Link href="#skills">
                    <button className={'heroButton'}>skills</button>
                </Link>
                <Link href="#projects">
                    <button className={'heroButton'}>projects</button>
                </Link>


            </div>
        </div>
    );
};

export default Hero;
