import Header from "@/app/components/Header";
import Head from "next/head";
import {metadata} from "@/app/layout";
import Hero from "@/app/components/Hero";


export default function Home() {
    return (
        <div className={'h-screen text-white snap-y snap-mandatory overflow-x-hidden overflow-y-auto'}>
            <Head>
                <title>{metadata.title!.toString()}</title>
            </Head>
            <Header/>
            <section id={'hero'} className={'snap-center'}>
                <Hero/>
            </section>
        </div>
    )
}
