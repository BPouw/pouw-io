import Image from 'next/image'
import React from "react";
import {LinkCard} from "@/app/LinkCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:mt-24 mt-8 w-screen overflow-hidden">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
                <Image
                    src="/avatar.jpeg"
                    alt="avatar"
                    width={48}
                    height={48}
                    layout="responsive"
                    style={{ width: 'auto', height: 'auto'}}
                    priority
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl pb-4">Boris Pouw</h1>
                <span className="text-xl">Full-stack developer</span>
                <a href="mailto:boris@pouw.io">boris@pouw.io</a>
            </div>
            <div className="card grid grid-cols-2 place-items-center gap-0 mb-4 mt-4">
                <LinkCard link={'https://github.com/bpouw'} title={'Github'} svg={'github.svg'}></LinkCard>
                <LinkCard link={'https://linkedin.com/in/pouw'} title={'Linkedin'} svg={'linkedin.svg'}></LinkCard>
            </div>
            <div className="skill-section">
                <hr className="w-80 h-0.5 mx-auto border-0 rounded dark:bg-white"></hr>
                <div className="card grid grid-cols-3 place-items-center gap-0 mb-8 md:mb-0 mt-8 md:mt-0">
                    <LinkCard title={'Figma'} svg={'figma.svg'}></LinkCard>
                    <LinkCard title={'Angular'} svg={'angular.svg'}></LinkCard>
                    <LinkCard title={'Tailwind'} svg={'tailwindcss.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-0 mt-2 mb-8 md:mb-0">
                    <LinkCard title={'.NET'} svg={'csharp.svg'}></LinkCard>
                    <LinkCard title={'Laravel'} svg={'laravel.svg'}></LinkCard>
                    <LinkCard title={'Node.js'} svg={'nodedotjs.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-0 mb-8 md:mb-0">
                    <LinkCard title={'SQL'} svg={'mariadb.svg'}></LinkCard>
                    <LinkCard title={'MongoDB'} svg={'mongodb.svg'}></LinkCard>
                    <LinkCard title={'RabbitMQ'} svg={'rabbitmq.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-0 mb-8 md:mb-0">
                    <LinkCard title={'Actions'} svg={'githubactions.svg'}></LinkCard>
                    <LinkCard title={'Docker'} svg={'docker.svg'}></LinkCard>
                    <LinkCard title={'Kubernetes'} svg={'kubernetes.svg'}></LinkCard>
                </div>
            </div>
        </main>
    )
}
