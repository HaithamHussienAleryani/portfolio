'use client';
import {motion} from 'framer-motion';
import * as React from 'react';
import {FaQuoteLeft} from "react-icons/fa";

type Props = {};
const About = (props: Props) => {
    return (
        <div
            className={'h-screen  flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'}>
            <h3 className={'text-2xl tracking-[20px] uppercase text-gray-500 absolute top-24'}>about</h3>
            <motion.img
                src={'/about.jpg'}
                initial={
                    {
                        opacity: 0,
                        x: -200,
                    }
                }
                transition={{
                    duration: 1.2,
                }}
                viewport={{once: true}}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                className={'-mb-20 md:mb-0 flex-shrink-0 w-40 mt-24 h-40 rounded-full object-cover md:rounded-xl md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'}
            />
            <motion.div
                initial={
                    {
                        opacity: 0,
                        x: 200,
                    }
                }
                transition={{
                    duration: 1.2,
                }}
                viewport={{once: true}}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}

                className={'space-y-10 px-0 md:px-20 relative'}>
                <div className={'absolute text-7xl top-10 right-0 text-primary opacity-20 '}>
                    <FaQuoteLeft/>
                </div>
                <h3 className={'font-semibold text-4xl '}>Here is a <span
                    className={'underline decoration-primary/60'}>little</span> background</h3>
                <p className={'text-sm md:text-base'}>Being a creative web designer and mobile developer is a thrilling
                    journey
                    where innovation meets functionality. Crafting visually stunning and user-friendly interfaces for
                    both web and mobile platforms requires a delicate balance between aesthetics and practicality. Its
                    about translating ideas into digital experiences that not only captivate users but also seamlessly
                    adapt to the ever-evolving technological landscape. This role demands a constant exploration of
                    design trends, coding languages, and user behaviors to stay ahead in delivering cutting-edge
                    solutions. The joy lies in turning concepts into interactive realities, ensuring that each pixel and
                    line of code contributes to an engaging and cohesive digital ecosystem</p>
                <div className={'absolute text-7xl right-0 text-primary opacity-20 '}>

                </div>
            </motion.div>
        </div>
    );
};
export default About;