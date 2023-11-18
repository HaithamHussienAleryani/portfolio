"use client";
import * as React from 'react';

type Props = {};
export const Projects = (props: Props) => {
    const projects = [{
        images: ['oreint.svg'],
        title: 'Orient Group LTD',
        link: 'https://orient-group-ltd.com/',
        description: 'A website for Orient Group LTD company that provides security and logistics and production services',
    },
        {
            images: [
                'doctor-1.png',
                'doctor-2.png',
                'doctor-3.png'
            ],
            title: 'Doctor AI',
            link: '',
            description: 'A Mobile App That uses AI to detect health problems and help patients book doctors, clinics and purchase medicine',

        }
    ];
    return (
        <div

            className={'h-[98%] flex flex-col relative text-center md:text-left md:flex-row w-screen px-10 justify-evenly items-center mx-auto'}>
            <h3 className={'text-2xl tracking-[20px] uppercase text-gray-500 absolute top-24'}>Projects</h3>

            <div
                className={'relative w-full  h-fit flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary overflow-y-hidden snap-x snap-mandatory z-20'}>
                {
                    projects.map((project, i) => (
                        <div
                            key={i}
                            className={'w-screen flex-shrink-0 !snap-center flex flex-col  space-y-5 items-center justify-center mx-auto  p-20 md:p-44 h-screen'}>

                            <div
                                className={'flex gap-10 w-full  justify-center items-center space-x-5'}>
                                {

                                    project.images.map((image, i) => (
                                        image === 'oreint.svg' ?
                                            <img key={i} src={`/${image}`} alt=""
                                                 className={'h-[200px] md:h-[100px]'}/>
                                            :
                                            <img key={i} src={`/${image}`} alt=""
                                                 className={'h-[200px] md:h-[380px]'}/>
                                    ))
                                }
                            </div>


                            <div>
                                <h4 className={'text-2xl my-10 font-semibold text-center'}>
                                    {
                                        project.link != '' ?

                                            <a href={project.link} className={'underline'}> {project.title} </a> :
                                            project.title
                                    }
                                </h4>
                                <p className={'text-lg text-center md:text-left'}>{project.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={'w-full absolute top-[30%] bg-primary/10 left-0 h-[400px] -skew-y-12 '}></div>
        </div>
    );
};