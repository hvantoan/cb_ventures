import Image from "next/image";
import React from "react";

export type Adviser = {
    img: string;
    name: string;
    designation: string;
    url?: string;
};

export type AdviserCardProps = {
    adviser: Adviser;
};

export function AdviserCard({ adviser }: AdviserCardProps) {
    return (
        <div className="group relative w-full rounded-16 transition duration-150 ease-out" data-aos="fade-up" data-aos-duration="1200">
            <div className="absolute w-full p-4 bottom-0 z-10">
                <div className="bg-bg_adviser px-4 py-2 bottom-0 rounded-10">
                    <h6 className="text-center select-none text-20 text-white font-semibold group-hover:text-secondary">{adviser.name}</h6>
                    <p className="text-center mt-1 text-14 text-adviser_sub select-none">{adviser.designation}</p>
                </div>
            </div>
            <div className="h-full bg-wh_color rounded-16">
                <Image src={adviser.img} alt={adviser.name} className="rounded-16 object-cover" height={592} width={450} />
            </div>
        </div>
    )
}



