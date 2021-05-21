import React from "react";
import { random } from "../../helpers/helpers";

type sparkle = {
    id: string;
    createdAt: number;
    color: string;
    size: number;
    style: React.CSSProperties;
};

const generateSparkle = (color: string): sparkle => {
    const sparkle: sparkle = {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: random(0, 100) + "%",
            left: random(0, 100) + "%",
        },
    };
    return sparkle;
};

export { generateSparkle };
