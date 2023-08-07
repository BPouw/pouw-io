import Image from 'next/image'
import React from "react";
import {LinkCard} from "@/app/LinkCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
                <Image
                    src="/avatar.webp"
                    alt="avatar"
                    width={48}
                    height={48}
                    layout="responsive"
                    style={{ width: 'auto', height: 'auto', objectPosition: 'bottom', objectFit: 'cover'}}
                    priority
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl">Boris Pouw</h1>
                <span>boris@pouw.io</span>
            </div>
            <div className="card grid grid-cols-2 place-items-center gap-32 sm:gap-0">
                <LinkCard link={'https://github.com/bpouw'} title={'Github'} svg={'github.svg'}></LinkCard>
                <LinkCard link={'https://linkedin.com/in/pouw'} title={'Linkedin'} svg={'linkedin.svg'}></LinkCard>
            </div>
            <div className="skill-section">
                <div className="card grid grid-cols-3 place-items-center gap-32 sm:gap-0">
                    <LinkCard title={'Angular'} svg={'angular.svg'}></LinkCard>
                    <LinkCard title={'Tailwind'} svg={'tailwindcss.svg'}></LinkCard>
                    <LinkCard title={'Next.js'} svg={'nextdotjs.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-32 sm:gap-0">
                    <LinkCard title={'.NET'} svg={'csharp.svg'}></LinkCard>
                    <LinkCard title={'Laravel'} svg={'laravel.svg'}></LinkCard>
                    <LinkCard title={'Node.js'} svg={'nodedotjs.svg'}></LinkCard>
                </div>
                <div className="card grid grid-cols-3 place-items-center gap-32 sm:gap-0">
                    <LinkCard title={'SQL'} svg={'mariadb.svg'}></LinkCard>
                    <LinkCard title={'MongoDB'} svg={'mongodb.svg'}></LinkCard>
                    <LinkCard title={'RabbitMQ'} svg={'rabbitmq.svg'}></LinkCard>
                </div>
            </div>
        </main>
    )
}
