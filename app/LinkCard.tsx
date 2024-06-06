import React from "react";
import Image from "next/image";

interface Input {
    title: string;
    svg: string;
    link?: string;
}

export const LinkCard: React.FC<Input> = ({ title, svg, link }) => {
    if (link) {
        return (
            <a href={link}>
                <div className="card flex flex-col items-center p-2 md:p-8 rounded-2xl hover:bg-gray-900">
                    <h2 className="text-xl pb-2">{title}</h2>
                    <Image
                        src={svg}
                        alt={title}
                        width={40}
                        height={24}
                        className="invert"
                        priority
                    />
                </div>
            </a>
        );
    }

    // If there is no link, render the card without the hover effect
    return (
        <div className="card flex flex-col items-center p-2 md:p-8 rounded-2xl">
            <h2 className="text-xl pb-2">{title}</h2>
            <Image
                src={svg}
                alt={title}
                width={40}
                height={24}
                className="invert"
                priority
            />
        </div>
    );
};
