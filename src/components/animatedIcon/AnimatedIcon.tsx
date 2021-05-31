import React from "react";
import UseAnimations from "react-useanimations";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const Icon = styled(UseAnimations)`

    @media ${device.mobileL}{
        font-size: 30;
    }

`;

const AnimatedIcon: React.FC<{
    animation: any;
    loop?: boolean;
    size?: number;
    color?: string;
    reversed?: boolean;
    onClick?: any;
}> = ({
    animation,
    loop = true,
    size = 56,
    color = "#fff",
    reversed = false,
    onClick = null,
}) => {
    return (
        <Icon
            reverse={reversed}
            animation={animation}
            size={size}
            strokeColor={color}
            loop={loop}
            onClick={onClick}
        />
    );
};

export default AnimatedIcon;
