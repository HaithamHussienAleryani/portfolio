import Header from "@/app/components/Header";
import Head from "next/head";
import {metadata} from "@/app/layout";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import {WorkExperience} from "@/app/components/WorkExperience";
import {Skills} from "@/app/components/Skills";
import {Projects} from "@/app/components/Projects";
import {Contact} from "@/app/components/Contact";


export default function Home() {
    return (
        <div
            className={'h-screen text-white snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary'}>
            <Head>
                <title>{metadata.title!.toString()}</title>
            </Head>
            <Header/>
            <section id={'hero'} className={'snap-start  '}>
                <Hero/>
            </section>
            <section id={'about'} className={'snap-center'}>
                <About/>
            </section>
            <section id={'experience'} className={'snap-center'}>
                <WorkExperience/>
            </section>
            <section id={'skills'} className={'snap-center'}>
                <Skills/>
            </section>
            <section id={'projects'} className={'snap-center'}>
                <Projects/>
            </section>
            <section id={'contact'} className={'snap-center'}>
                <Contact/>
            </section>
        </div>
    )
}
