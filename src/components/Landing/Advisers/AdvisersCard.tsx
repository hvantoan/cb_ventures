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
        <div className="relative w-full h-[300px]">
            <div className="absolute w-full p-4 bottom-0">
                <div className="bg-darkHard px-4 py-2 bottom-0 rounded-10">
                    <h5 className="text-center text-22">{adviser.name}</h5>
                    <p className="text-center mt-1 text-18 text-pink">{adviser.designation}</p>
                </div>
            </div>
            <div className="h-full">
                <img src={adviser.img} alt={adviser.name} className="w-full h-full rounded-lg object-cover" />
            </div>
        </div>
    )
}



