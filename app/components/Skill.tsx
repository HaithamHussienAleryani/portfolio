// @flow
import {motion} from 'framer-motion';
import * as React from 'react';

type Props = {
    directionLeft?: boolean;
    image: string,
    percentage: number
};
export const Skill = (props: Props) => {
    return (
        <motion.div
            initial={{y: 200, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.2}}
            className={'group relative flex cursor-pointer'}>
            <img
                src={`/${props.image}.svg`}
                className={'rounded-full border border-gray-500 bg-white object-cover h-16 w-16  md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'}
            />
            <div
                className={'absolute  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-primary h-16 w-16 md:h-24 md:w-24   rounded-full'}>
                <div className={'flex items-center justify-center h-full'}>
                    <p className={'text-3xl font-bold text-black opacity-100 '}>{props.percentage}%</p>
                </div>
            </div>
        </motion.div>
    );
};