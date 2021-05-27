import React from "react";
import UseAnimations from "react-useanimations";
import styled from "styled-components";

const Icon = styled(UseAnimations)``;

const AnimatedIcon: React.FC<{
    animation: any;
    loop?: boolean;
    size?: number;
    color?: string;
    reversed?: boolean;
    onClick: any;
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
