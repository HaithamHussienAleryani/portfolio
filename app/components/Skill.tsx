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
        <div className={'group relative flex cursor-pointer'}>
            <motion.img
                initial={{
                    x: props.directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1}}
                src={`/${props.image}.svg`}
                className={'rounded-full border border-gray-500 bg-white object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out'}
            />
            <div
                className={'absolute  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-primary h-24 w-24   rounded-full'}>
                <div className={'flex items-center justify-center h-full'}>
                    <p className={'text-3xl font-bold text-black opacity-100 '}>{props.percentage}%</p>
                </div>
            </div>
        </div>
    );
};