import React from "react";

import { range } from "../../helpers/helpers";
import usePrefersReducedMotion from "../../hooks/usePreferReduceMotion";
import useRandomInterval from "../../hooks/useRandomInterver";
import { generateSparkle } from "./Sparkle.helper";
import {
    ChildWrapper,
    SparkleSvg,
    SparkleWrapper,
    Wrapper,
} from "./Sparkle.style";

const Sparkles: React.FC<{ color?: string; textColor?: string }> = ({
    color = "#FFC700",
    textColor,
    children,
    ...delegated
}) => {
    const [sparkles, setSparkles] = React.useState(() => {
        return range(3).map(() => generateSparkle(color));
    });
    const prefersReducedMotion = usePrefersReducedMotion();
    useRandomInterval(
        () => {
            const sparkle = generateSparkle(color);
            const now = Date.now();
            const nextSparkles = sparkles.filter((sp) => {
                const delta = now - sp.createdAt;
                return delta < 750;
            });
            nextSparkles.push(sparkle);
            setSparkles(nextSparkles);
        },
        prefersReducedMotion ? null : 50,
        prefersReducedMotion ? null : 450
    );
    return (
        <Wrapper {...delegated}>
            {sparkles.map((sparkle) => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <ChildWrapper style={{ color: textColor }}>{children}</ChildWrapper>
        </Wrapper>
    );
};
const Sparkle: React.FC<{
    size: number;
    color: string;
    style: React.CSSProperties;
}> = ({ size, color, style }) => {
    const path =
        "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";
    return (
        <SparkleWrapper style={style}>
            <SparkleSvg
                width={size}
                height={size}
                viewBox="0 0 68 68"
                fill="none"
            >
                <path d={path} fill={color} />
            </SparkleSvg>
        </SparkleWrapper>
    );
};

export default Sparkles;
