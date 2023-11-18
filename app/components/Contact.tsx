'use client';
import * as React from 'react';
import {FaEnvelope, FaPhone} from "react-icons/fa";
import {SubmitHandler, useForm} from "react-hook-form";

type Props = {};
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};


export const Contact = (props: Props) => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:haithamaleryani00@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ... ${formData.email}`
    };

    return (
        <div
            className={'h-screen flex flex-col relative text-center md:text-left  max-w-7xl px-10 justify-evenly items-center mx-auto'}>
            <h3 className={'text-2xl tracking-[20px] uppercase text-gray-500 absolute top-24'}>Contact</h3>

            <div className={'flex space-y-10 mt-40'}>
                <h4 className={'text-3xl font-semibold text-center'}>
                    I have got just what you need <span className={'decoration-primary/50 underline'}>Lets Talk</span>
                </h4>
            </div>

            <div className={'space-y-10 '}>
                <div className={'flex items-center space-x-5 justify-center'}>
                    <FaPhone className={'text-primary h-7 w-7 animate-pulse'}/>
                    <p className={'text-xl'}>+967771056641</p>
                </div>
                <div className={'flex items-center space-x-5 justify-center'}>
                    <FaEnvelope className={'text-primary h-7 w-7 animate-pulse'}/>
                    <p className={'text-xl'}>haithamaleryani00@gmail.com</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action=""
                  className={'flex flex-col space-y-2  !mx-20 md:w-fit md:mx-auto'}>
                <div className={'flex flex-col md:flex-row md:space-x-2 space-y-2 '}>
                    <input {...register('name')} className={'contact-input'} placeholder='Name' type="text"/>
                    <input {...register('email')} className={'contact-input'} placeholder='Email' type="email"/>
                </div>

                <input {...register('subject')} placeholder='Subject' className={'contact-input'} type="text"/>
                <textarea {...register('message')} placeholder='Message' className={'contact-input'}/>

                <button className={'bg-primary py-5 px-10 rounded-md text-black font-bold text-lg'}>Submit</button>
            </form>
        </div>
    );
};