import { Card } from "antd";
import React from "react";
import { Advisers } from './index';

export type Adviser = {
    img: string;
    name: string;
    designation: string;
};

export type AdviserCardProps = {
    adviser: Adviser;
};

export function AdviserCard({ adviser }: AdviserCardProps) {
    return (
        <Card className="w-[300px] card-no-padding">
            <img src={adviser.img} alt={adviser.name} className="absolute w-full h-full bottom-0 left-0 rounded-lg" />
            <Card className=" w-full bg-darkHard place-content-center mt-[250px]">
                <h5 className="text-center">{adviser.name}</h5>
                <p className="text-center text-pink mt-[10px]">{adviser.designation}</p>
            </Card>
        </Card>
    )
}



