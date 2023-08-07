import Image from 'next/image'
import React from "react";
import {LinkCard} from "@/app/LinkCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl">Boris Pouw</h1>
                <span>boris@pouw.io</span>
            </div>
            <div className="card grid grid-cols-2 place-items-center">
                <LinkCard link={'https://github.com/bpouw'} title={'Github'} svg={'github.svg'}></LinkCard>
                <LinkCard link={'https://linkedin.com/in/pouw'} title={'Linkedin'} svg={'linkedin.svg'}></LinkCard>
            </div>
            <div className="skill-section">
                <div className="card grid grid-cols-3 place-items-center gap-32 md:gap-0">
                    <LinkCard title={'Angular'} svg={'angular.svg'}></LinkCard>
                    <LinkCard title={'Tailwind'} svg={'tailwindcss.svg'}></LinkCard>
                    <LinkCard title={'Next.js'} svg={'nextdotjs.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-32 md:gap--">
                    <LinkCard title={'.NET'} svg={'csharp.svg'}></LinkCard>
                    <LinkCard title={'Laravel'} svg={'laravel.svg'}></LinkCard>
                    <LinkCard title={'Node.js'} svg={'nodedotjs.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-32 md:gap-0">
                    <LinkCard title={'SQL'} svg={'mariadb.svg'}></LinkCard>
                    <LinkCard title={'MongoDB'} svg={'mongodb.svg'}></LinkCard>
                    <LinkCard title={'RabbitMQ'} svg={'rabbitmq.svg'}></LinkCard>
                </div>
            </div>
        </main>
    )
}
