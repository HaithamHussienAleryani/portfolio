import {motion} from 'framer-motion';
import React from 'react';

const BackgroundCircles = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5
            }}

            className={'relative flex justify-center items-center z-0 mt-52'}>
            <div
                className={' absolute  border-primary opacity-10 border mx-auto mt-52 w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full animate-ping'}/>
            <div
                className={' absolute border-primary opacity-25 border mx-auto mt-52 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full animate-ping'}/>
            <div
                className={' absolute border-primary opacity-60 border mx-auto mt-52 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full animate-ping'}/>

            <div
                className={' absolute border-primary border mx-auto opacity-20 mt-52 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full animate-pulse'}/>

        </motion.div>
    );
};

export default BackgroundCircles;
